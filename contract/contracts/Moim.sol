pragma solidity 0.5.0;

/**
* @title SafeMath
* @dev Unsigned math operations with safety checks that revert on error
*/
library SafeMath {
   /**
    * @dev Multiplies two unsigned integers, reverts on overflow.
    */
   function mul(uint256 a, uint256 b) internal pure returns (uint256) {
       // Gas optimization: this is cheaper than requiring ‘a’ not being zero, but the
       // benefit is lost if ‘b’ is also tested.
       // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
       if (a == 0) {
           return 0;
       }

       uint256 c = a * b;
       require(c / a == b);

       return c;
   }

   /**
    * @dev Integer division of two unsigned integers truncating the quotient, reverts on division by zero.
    */
   function div(uint256 a, uint256 b) internal pure returns (uint256) {
       // Solidity only automatically asserts when dividing by 0
       require(b > 0);
       uint256 c = a / b;
       // assert(a == b * c + a % b); // There is no case in which this doesn’t hold

       return c;
   }

   /**
    * @dev Subtracts two unsigned integers, reverts on overflow (i.e. if subtrahend is greater than minuend).
    */
   function sub(uint256 a, uint256 b) internal pure returns (uint256) {
       require(b <= a);
       uint256 c = a - b;

       return c;
   }

   /**
    * @dev Adds two unsigned integers, reverts on overflow.
    */
   function add(uint256 a, uint256 b) internal pure returns (uint256) {
       uint256 c = a + b;
       require(c >= a);

       return c;
   }

   /**
    * @dev Divides two unsigned integers and returns the remainder (unsigned integer modulo),
    * reverts when dividing by zero.
    */
   function mod(uint256 a, uint256 b) internal pure returns (uint256) {
       require(b != 0);
       return a % b;
   }
}

contract LoanContract {
   using SafeMath for uint256;

   event NewLoanCreation(address bank, address target, uint256 postNumber, uint256 value);

   struct Loan {
       address borrow; // naming change
       address lender; // naming change
       uint256 postNumber;
       uint256 totalAmount;
       uint256 totalPayBackedAmount;
       uint256 loanStartTime;
       uint256[] payBackedAmount;
       uint256[] payBackedTime;
   }

   mapping(bytes32 => Loan) loanMap;

   function getId(address bankAddr, address targetAddr, uint256 postNumber) private pure returns(bytes32) {
       return keccak256(abi.encodePacked(bankAddr,targetAddr, postNumber));
   }

   function createNewLoan(address _borrowAddr, address _lenderAddr, uint256 _postNumber, uint256 _totalAmount) external {
       bytes32 id = getId(_borrowAddr, _lenderAddr, _postNumber);
      require(loanMap[id].loanStartTime == 0, "Already created loan.");

       loanMap[id] = Loan({
               borrow : _borrowAddr,
               lender : _lenderAddr,
               postNumber : _postNumber,
               totalAmount : _totalAmount,
               totalPayBackedAmount : 0,
               loanStartTime : now,
               payBackedAmount : new uint256[](0),
               payBackedTime : new uint256[](0)
           });
       emit NewLoanCreation( _borrowAddr, _lenderAddr, _postNumber, _totalAmount);
   }

   function payBackLoan(address _borrowAddr, address _lenderAddr, uint256 _postNumber, uint256 payBackVal) external {
       bytes32 id = getId(_borrowAddr, _lenderAddr, _postNumber);
      require(id != 0, "Not existed id.");

      require((loanMap[id].totalAmount - loanMap[id].totalPayBackedAmount) >= payBackVal, "Pay back value is larger than borrow.");
       loanMap[id].totalPayBackedAmount = loanMap[id].totalPayBackedAmount.add(payBackVal);
       loanMap[id].payBackedAmount.push(payBackVal);
       loanMap[id].payBackedTime.push(now);
   }
   
  function getLoanInfo(address _borrowAddr, address _lenderAddr, uint256 _postNumber) public view returns(uint256, uint256, uint256[] memory, uint256[] memory) {
        bytes32 _id = getId(_borrowAddr, _lenderAddr, _postNumber);
        return(
            loanMap[_id].totalAmount,
            loanMap[_id].totalPayBackedAmount,
            loanMap[_id].payBackedAmount,
            loanMap[_id].payBackedTime
        );
    }
}