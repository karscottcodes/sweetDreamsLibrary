// Create Page Load Listener
$(document).ready(function () {
  // Create Library Load Function
  function libraryReady() {
    //Create Variables for myLibrary
    var libraryOne = {
      title: "Five Little Unicorns",
      coverImage: "./images/five-unicorns.jpg",
      author: "Michelle Courtney",
      illustrator: "Bowers Studio",
    };
    var libraryTwo = {
      title: "There Was An Old Dragon Who Swallowed A Knight",
      coverImage: "./images/old-dragon.jpg",
      author: "Penny Parker Klostermann",
      illustrator: "Ben Mantle",
    };
    var libraryThree = {
      title: "I love you, Stinky Face",
      coverImage: "./images/stinky-face.avif",
      author: "Lisa Mccourt",
      illustrator: "Cyd Moore",
    };
    var libraryFour = {
      title: "The Berenstain Bears and Too Much TV",
      coverImage: "./images/berenstain-tv.avif",
      author: "Stan & Jan Berenstain",
      illustrator: "Stan & Jan Berenstain",
    };
    var libraryFive = {
      title: "How to Babysit a Grandma",
      coverImage: "./images/babysit-grandma.avif",
      author: "Jean Reagan",
      illustrator: "Lee Wildish",
    };
    var librarySix = {
      title: "Bluey: Grannies",
      coverImage: "./images/bluey-grannies.avif",
      author: "",
      illustrator: "",
    };
    var librarySeven = {
      title: "Where The Wild Things Are",
      coverImage: "./images/WTWTA.jpeg",
      author: "Maurice Sendak",
      illustrator: "Maurice Sendak",
    };
    var libraryEight = {
      title: "One Fish, Two Fish. Red Fish, Blue Fish.",
      coverImage: "./images/One-Fish-Two-Fish-Red-Fish-Blue-Fish.webp",
      author: "Dr. Seuss",
      illustrator: "",
    };
    var libraryNine = {
      title: "Goodnight Moon",
      coverImage: "./images/Goodnight-Moon.webp",
      author: "Margaret Wise Brown",
      illustrator: "Clement Hurd",
    };
    var libraryTen = {
      title: "Tiny T. Rex and the Impossible Hug",
      coverImage: "./images/Tiny-T.-Rex-and-the-Impossible-Hug.webp",
      author: "Jonathan Stutzman",
      illustrator: "Jay Fleck",
    };

    var myLibrary = [
      libraryOne,
      libraryTwo,
      libraryThree,
      libraryFour,
      libraryFive,
      librarySix,
      librarySeven,
      libraryEight,
      libraryNine,
      libraryTen,
    ];

    // Create Variables for Required HTML Elements
    var outContainer = $("#outputContainer");
    var bOneTitle = $("#bookOneTitle");
    var bOneCover = $("#bookOneCover");

    var bTwoTitle = $("#bookTwoTitle");
    var bTwoCover = $("#bookTwoCover");

    var startBtn = $("#cta");
    // var resetBtn = $("#resetBtn");
    var countdownSound = $("#countdownSound")[0]; // Get the audio element

    //Hide Output Container Before Button Press
    outContainer.css("display", "none");

    //On click function to start countdown
    $(startBtn).click(function () {
      $(this)
        .addClass("active")
        .delay(300)
        .queue(function (next) {
          $(this).removeClass("active");
          next();
        });
    });

    // On click function to stop countdown and reload page
    // resetBtn.click(function () {
    //     clearInterval(countdownInterval); // Stop the countdown
    //     location.reload(); // Reload the page
    //   });

    // Program
    function runProgram() {

    //https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
      // Add a countdown function
      startCountdown(3, function () {
        // Randomize two index #s from my array
        var randomIndexOne = Math.floor(Math.random() * myLibrary.length);
        var randomIndexTwo = Math.floor(Math.random() * myLibrary.length);

        // Check if my 2 random index #s are the same, if they are the same re-randomize IndexTwo
        while (randomIndexTwo === randomIndexOne) {
          randomIndexTwo = Math.floor(Math.random() * myLibrary.length);
        }

        // Get my two random books
        var randomBookOne = myLibrary[randomIndexOne];
        var randomBookTwo = myLibrary[randomIndexTwo];

        // Output Titles
        outContainer.css("display", "flex");
        bOneTitle.html("<p><h3>" + randomBookOne.title + "</h3></p>");
        bOneCover.html(
          "<p><img src='" +
            randomBookOne.coverImage +
            "' alt='" +
            randomBookOne.title +
            " Cover'></p>"
        );
        bTwoTitle.html("<p><h3>" + randomBookTwo.title + "</h3></p>");
        bTwoCover.html(
          "<p><img src='" +
            randomBookTwo.coverImage +
            "' alt='" +
            randomBookTwo.title +
            " Cover'></p>"
        );
    // Play sound effect
      playCountdownSound();
      });
    }

    //Countdown
    function startCountdown(seconds, callback) {
        var countdownInterval = setInterval(function () {
            if (seconds > 0) {
                console.log(seconds);
                startBtn.text(seconds); // UPDATE BTN WITH COUNTDOWN TEXT
                seconds--;
            } else {
                clearInterval(countdownInterval);
                startBtn.text("Let's Read! (or Try Again)")
                callback();
            }
        }, 1000);
    }

      // Play sound effect function
  function playCountdownSound() {
    countdownSound.play();
  }

    // Set Event Listeners
    startBtn.on("click", runProgram);
  }

  // Call the libraryReady function when the document is ready
  libraryReady();
});
