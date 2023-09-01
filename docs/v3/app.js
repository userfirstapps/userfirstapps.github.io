document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    "": "home.html",
    "?": "home.html",
    "?news": "news.html",
    "?news": "about.html",
    "?news": "about.html",
    "?contact": "contact.html",
  };

  function loading() {
    // show loading div
  }

  function navigateToPage(url, push) {
    console.log("navigateToPage: ", url);
    const pagePath = routes[url] || "404.html";
    console.log("pagePath: ", pagePath);
    
    loading();
    
    //fetch
    fetch(`pages/${pagePath}`)
      .then((response) => response.text())
      .then((content) => {
        document.getElementById("content").innerHTML = content;
        // hide loading div
        if (push) {
          history.pushState({url}, null, url);
        }
      })
      .catch((error) => {
        console.error("Error loading page: ", error);
        //hide loading div
        document.getElementById("content").innerHTML = "Error loading page.";
      });
  }

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      navigateToPage(e.target.getAttribute("href"), true);
    }
  });

  window.addEventListener("popstate", () => {
    if (event.state && event.state.url) {
      navigateToPage(event.state.url, false);
    } else {
      console.log("Pop was null");
      navigateToPage("?", false);
    }
  });
  navigateToPage(window.location.search, false)
});
