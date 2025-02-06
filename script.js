// Initialize Firebase from CDN
const firebaseConfig = {
    apiKey: "AIzaSyCresQf6PNhgCnwj0atTTGHAcog65mj5FU",
    authDomain: "fac-birth.firebaseapp.com",
    databaseURL: "https://fac-birth-default-rtdb.firebaseio.com",
    projectId: "fac-birth",
    storageBucket: "fac-birth.firebasestorage.app",
    messagingSenderId: "67944889058",
    appId: "1:67944889058:web:407ed0a3e590bfe7b47cbb"
  };
  
  // Check if Firebase is available
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
  
    function checkBirthdays() {
        const today = new Date();
        const todayStr = `${today.getMonth() + 1}-${today.getDate()}`; // Format MM-DD
    
        const facultyRef = database.ref("faculty_coordinators");
        facultyRef.once("value").then(snapshot => {
            if (snapshot.exists()) {
                snapshot.forEach(childSnapshot => {
                    const data = childSnapshot.val();
                    const name = data.name.trim();
                    const birthdate = data.birthdate; // Expected format: MM-DD
    
                    if (birthdate === todayStr) {
                        document.querySelectorAll(".card-title").forEach(title => {
                            if (title.textContent.trim() === name) {
                                const subcontain = title.closest(".subcontain"); // Get the main parent container
    
                                if (subcontain) {
                                    const ribbon = document.createElement("img");
                                    ribbon.src = "static/pookie-ribbon.png";
                                    ribbon.style.position = "absolute";
                                    ribbon.style.top = "10px"; // Position from top
                                    ribbon.style.right = "10px"; // NOW IT'S ON THE RIGHT
                                    ribbon.style.maxWidth = "70px"; // Maintain aspect ratio
                                    ribbon.style.maxHeight = "70px"; 
                                    ribbon.style.objectFit = "contain"; 
                                    ribbon.style.zIndex = "10";
    
                                    // Ensure the container has a position
                                    subcontain.style.position = "relative";
                                    subcontain.appendChild(ribbon);
                                }
                            }
                        });
                    }
                });
            } else {
                console.log("No faculty data found.");
            }
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }


    window.addEventListener("load", checkBirthdays);
  } else {
    console.error("Firebase not loaded. Make sure you included the CDN scripts.");
  }
  
  // Loader
  window.addEventListener('load', function () {
      document.querySelector('.loader').style.display = 'none';
  });
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  const dynamicText = document.querySelector("h1 span");
  const words = ["Society For DataScience","सोसायटी फॉर डेटा साइंस"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
  
      if (!isDeleting && charIndex < currentWord.length) {
          charIndex++;
          setTimeout(typeEffect, 200);
      } else if (isDeleting && charIndex > 0) {
          charIndex--;
          setTimeout(typeEffect, 100);
      } else {
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 1200);
      }
  }
  
  typeEffect();
  
  const allImages = document.querySelectorAll(".images .img");
  const lightbox = document.querySelector(".lightbox");
  const closeImgBtn = lightbox.querySelector(".close-icon");
  allImages.forEach(img => {
      img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
  });
  const showLightbox = (img) => {
      lightbox.querySelector("img").src = img;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
  }
  closeImgBtn.addEventListener("click", () => {
      lightbox.classList.remove("show");
      document.body.style.overflow = "auto";
  });
  