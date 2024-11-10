class User{

  /* gender and prefersToRoom is either (male, female, non-binary), sleepTime is either (early sleeper or late sleeper)
     cleanLevel, noiseLevel, and partyLevel are all from 1 - 5 inclusive
  */
  constructor(_userName, _selfIntro, _gender, _prefersToRoom, _sleepTime, _cleanLevel, _noiseLevel, _partyLevel) {
    this.profile = {
      userName: _userName,
      selfIntro: _selfIntro,
      gender: _gender,
      prefersToRoom: _prefersToRoom,
      sleepTime: _sleepTime,
      cleanLevel: _cleanLevel,
      noiseLevel: _noiseLevel,
      partyLevel: _partyLevel
    };
  }

}

module.exports = User;