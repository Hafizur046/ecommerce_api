var Person = mongoose.model('Person', yourSchema);
// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
if (err) return handleError(err);
// Prints "Space Ghost is a talk show host".
console.log('%s %s is a %s.', person.name.first, person.name.last,
person.occupation);
});




var userSchema = new Schema({
    name: String,
    friends: [{ type: ObjectId, ref: 'User' }]
  });
  
  User.
    findOne({ name: 'Val' }).
    populate({
      path: 'friends',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'friends' }
    });