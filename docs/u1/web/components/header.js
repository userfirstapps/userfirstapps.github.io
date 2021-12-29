const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `

<style>

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

header {
    background-color: #00BFFF;
    width: 100%;
    height: 72px;
}

.header_nav_container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 0 40px;
    height: 100%;
}

.header_nav {
    width: 100%;
}

.header_nav ul {
    display: flex;
    justify-content: center;
}

.header_nav li {
    margin-right: 20px;
    margin-left: 20px;
}

.header_menu ul {
    display: flex;
}

.header_menu li {
    margin-left: 16px;
}

.header_nav_top {
    display: none;
}

.header_nav_bottom {
    display: none;
}

.bottom_nav_sp_container {
    display: none;
}

@media screen and (max-width: 901px) and (min-width: 900px) {}

@media screen and (max-width: 900px) {
    header {
        width: 100%;
        height: 72px;
        background-color: #00BFFF;
    }

    .header_nav_top {
        height: 36px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
    }

    @keyframes header_nav_top_ani {
        0% {
            transform: translateY(18px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .header_nav_top_ani {
        animation: header_nav_top_ani 500ms forwards;
    }

    @keyframes header_nav_bottom_ani {
        0% {
            transform: translateY(-18px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    .header_nav_bottom_ani {
        animation: header_nav_bottom_ani 500ms forwards;
    }

    .header_nav_bottom {
        height: 36px;
        width: 100%;
        padding: 0 20px;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .header_nav_bottom ul {
        display: flex;
        justify-content: center;
    }

    .header_nav_bottom li {
        margin-right: 20px;
        margin-left: 20px;
    }

    .header_nav_container {
        display: none;
    }

    .bottom_nav_sp_container {
        display: none;
    }

}

@media screen and (max-width: 380px) {

    .bottom_nav_sp_container {
        width: 100%;
        height: 80px;
        display: initial;
    }

    .bottom_nav_sp {
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #00BFFF;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
    }

    .bottom_nav_sp li {
        display: block;
        table-layout: fixed;
        width: 100%;
        height: 80px;
        list-style: none;
        text-align: center;
    }

    .bottom_nav_sp_anchor {
        display: block;
        width: 100%;
        height: 80px;
        padding-top: 15.4px;
        padding-bottom: 15.4px;
    }

    .bottom_nav_sp_anchor span {
        display: block;
        font-size: 12px;
        width: 100%; /*added*/
        height: 100%; /*added*/
        margin-top: 8px;
    }

    .bottom_nav_sp img {
        width: 24px;
        height: 24px;
    }

    header {
        display: none;
    }

}
</style>

<header>
<div class="header_nav_container">
    <div class="header_logo">U1st</div>
    <div class="header_nav">
        <ul>
            <li class="nav_item"><a href="home.html">HOME</a></li>
            <li class="nav_item"><a href="news.html">NEWS</a></li>
            <li class="nav_item"><a href="process.html">PROCESS</a></li>
            <li class="nav_item"><a href="portfolio.html">PORTFOLIO</a></li>
            <li class="nav_item"><a href="contact.html">CONTACT</a></li>
        </ul>
    </div>
    <div class="header_menu">
        <ul>
            <li>Day|Night</li>
            <li>Lan</li>
        </ul>
    </div>
</div>

<div class="header_nav_top">
    <div class="header_logo header_nav_top_ani">U1st</div>
    <div class="header_menu header_nav_top_ani">
        <ul>
            <li>Day|Night</li>
            <li>Lan</li>
        </ul>
    </div>
</div>
<div class="header_nav_bottom">
    <ul class="header_nav_bottom_ani">
        <li class="nav_item"><a href="home.html">HOME</a></li>
        <li class="nav_item"><a href="news.html">NEWS</a></li>
        <li class="nav_item"><a href="process.html">PROCESS</a></li>
        <li class="nav_item"><a href="portfolio.html">PORTFOLIO</a></li>
        <li class="nav_item"><a href="contact.html">CONTACT</a></li>
    </ul>
</div>
</header>

<div class="bottom_nav_sp_container">
<ul class="bottom_nav_sp">
    <li>
        <a class="bottom_nav_sp_anchor" href="home.html"><img src="images/nav_icon/home.png" /><br>
            <span class="icon_name">HOME</span></a>
    </li>
    <li>
        <a class="bottom_nav_sp_anchor" href="news.html"><img src="images/nav_icon/news.png" /><br>
            <span class="icon_name">NEWS</span></a>
    </li>
    <li>
        <a class="bottom_nav_sp_anchor" href="process.html"><img src="images/nav_icon/iteration.png" /><br>
            <span class="icon_name">PROCESS</span></a>
    </li>
    <li>
        <a class="bottom_nav_sp_anchor" href="portfolio.html"><img src="images/nav_icon/portfolio.png" /><br>
            <span class="icon_name">PORTFOLIO</span></a>
    </li>
    <li>
        <a class="bottom_nav_sp_anchor" href="contact.html"><img src="images/nav_icon/phone.png" /><br>
            <span class="icon_name">CONTACT</span></a>
    </li>
</ul>
</div>


`;

class Header extends HTMLElement {
    constructor() {
        super();
        
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });

        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define("header-component", Header);

