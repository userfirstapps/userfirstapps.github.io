document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    // main nav
    "/": "home.html",
    "/about": "about.html",
    "/contact": "contact.html",
    // sub nav
    "/home/page1": "home_page1.html",
    "/home/page2": "home_page2.html",
    404: "404.html",
  };

  function loading() {
    // show loading div
  }

  function navigateToPage(url) {
    const pagePath = routes[url] || "404.html";
    
    loading();
    
    //fetch
    fetch(`/pages/${pagePath}`)
      .then((response) => response.text())
      .then((content) => {
        document.getElementById("content").innerHTML = content;
        // hide loading div
        history.pushState(null, null, url);
      })
      .catch((error) => {
        console.error("Error loading page:", error);
        //hide loading div
        document.getElementById("content").innerHTML = "Error loading page.";
      });
  }

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      e.preventDefault();
      navigateToPage(e.target.getAttribute("href"));
    }
  });

  window.addEventListener("popstate", () => {
    navigateToPage(location.pathname);
    history.popState();
  });
});
