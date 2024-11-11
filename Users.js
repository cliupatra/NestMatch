const User = require('./User');
class Users {
  userA = new User("Alyssa", "Hi, I'm a second year and I'm looking for a roommate that is tidy and not too loud. I'm definitely not a partier so I would appreaciate a roommate who's the same! I am a late sleeper.", "female", "female", "late", 3, 2, 0)
  constructor() {

    this.users = [
      this.userA,
      new User("Brian", "Hi, I'm looking for a roommate that is fine with me coming back home late from parties!", "male", "male", "late", 3, 3, 4),
      new User("Carrie", "Looking for someone that is clean and sleeps early!", "female", "female", "early", 3, 5, 2),
      new User("Dean", "Looking for someone who's clean. Fine with noise.", "male", "male", "late", 3, 5, 1)
    ];
  }

  addUser(user) {
    this.users.push(user);
  }

  // comparing the user preferences with all of the other users: -1 means very dissimilar, 0 means no similarity, 1 means identical
  // similarities will usually be within the range of -1 to 1
  findBestMatches(user) {
    let matches = [];
    let count = 3;

    console.log(user.profile);

    for (let i = 0; i < this.users.length; i++) {
      let sumA = 0;
      let sumB = 0;
      let sumA2 = 0;
      let sumB2 = 0;
      let sumAB = 0;
      let otherUser = this.users[i];

      if (user !== otherUser && user.profile.prefersToRoom == otherUser.profile.gender) {
        sumA = user.profile.cleanLevel + user.profile.noiseLevel + user.profile.partyLevel;
        sumB = otherUser.profile.cleanLevel + otherUser.profile.noiseLevel + otherUser.profile.partyLevel;

        sumA2 = user.profile.cleanLevel * user.profile.cleanLevel
          + user.profile.noiseLevel * user.profile.noiseLevel
          + user.profile.partyLevel * user.profile.partyLevel;

        sumB2 = otherUser.profile.cleanLevel * otherUser.profile.cleanLevel
          + otherUser.profile.noiseLevel * otherUser.profile.noiseLevel
          + otherUser.profile.partyLevel * otherUser.profile.partyLevel;

        sumAB = user.profile.cleanLevel * otherUser.profile.cleanLevel
          + user.profile.noiseLevel * otherUser.profile.noiseLevel
          + user.profile.partyLevel * otherUser.profile.partyLevel;

        console.log(`User: ${user.profile.userName}, Other User: ${otherUser.profile.userName}`);
        console.log(`sumA: ${sumA}, sumB: ${sumB}`);
        console.log(`sumA2: ${sumA2}, sumB2: ${sumB2}, sumAB: ${sumAB}`);


        let numerator = sumAB - ((sumA * sumB) / count);
        let denom = Math.sqrt(
          ((sumA2 - (sumA * sumA) / count)) * (sumB2 - (sumB * sumB) / count)
        );
        let similarity = denom === 0 ? 0 : numerator / denom;
        let otherUserProfile = otherUser.profile;
        matches.push({ otherUserProfile, similarity });
      }


    }

    matches.sort((a, b) => b.similarity - a.similarity);

    return matches;

  }


  test() {
    let matches = this.findBestMatches(this.userA);
    console.log(matches);
  }


}

module.exports = Users;