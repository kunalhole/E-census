// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity  0.8.15;

contract ecensus {

    address owner;

    uint males=0;
    uint females=0;
    uint others=0;
    constructor() {
        owner=msg.sender;
    }

    struct User{
        uint id;
        string firstName;
        string lastName;
        uint aadharNumber;
        uint birthCerNumber;
        uint age;
        string gender;
       

    }

    User[] private users;
    mapping(uint=>address) userIdentity;

    function addInfo(string memory _firstName,string memory _lastName,uint _aadharNumber, uint _birthCerNumber,uint _age,string memory _gender) external{
           uint userId= users.length;
          if(_gender==="male"){
            males++;
          }if(_gender==="female"){
            females++;
          }else{
            others++;
          }
           users.push(User(userId,_firstName,_lastName,_aadharNumber,_birthCerNumber,_age,_gender));
           userIdentity[userId]=owner;
         

    }

    function getInfo() external view returns (User[] calldata){
        
        for(uint i=0;i<users.length;i++){
            if(userIdentity[i]==owner){
                 return users[i];
            }
        }

    }


}