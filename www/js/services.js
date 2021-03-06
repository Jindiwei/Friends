angular.module('starter.services', ['service.myPhotos','service.myBlogs','service.Trends'])

  .factory('Notes', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var notes = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      promote: function() {
        var promote = [];
        promote.push(notes[3]);
        promote.push(notes[2]);
        return promote;
      },
      all: function() {
        return notes;
      },
      remove: function(note) {
        notes.splice(notes.indexOf(note), 1);
      },
      get: function(noteId) {
        for (var i = 0; i < notes.length; i++) {
          if (notes[i].id === parseInt(noteId)) {
            return notes[i];
          }
        }
        return null;
      }
    };
  })
  .factory('User', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var users = [
      {
        username: "duocai",
        password: "123456"
      }
    ];

    return {
      login: function(ume, pwd) {
        for (var i = 0; i < users.length; i++) {
          var user = users[i];
          if (ume == user.password && pwd == user.password)
            return true;
        }
        return false;
      },

      register: function(ume, pwd) {
        var user = {
          username: ume,
          password: pwd
        };
        users.push(user);
      }
    };

  });
