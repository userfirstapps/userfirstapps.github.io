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

.header_nav_tb {
    display: none;
}

.bottom_nav_sp_container {
    display: none;
}

@media screen and (max-width: 901px) and (min-width: 900px) {}

@media screen and (max-width: 900px) {
    .header_nav_tb {
        display: initial;
        width: 100%;
        height: 124px;
    }

    .header_nav_top {
        height: 72px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        background-color: #00BFFF;
    }

    .tab_container {
        padding-bottom: 1em;
        background-color: #fff;
        border-top: 1px solid #fff;
        margin: 0 auto;
    }

    .tab_item {
        width: calc(100%/5);
        padding: 15px 0;
        background-color: #ececec;
        text-align: center;
        color: #00BFFF;
        display: block;
        float: left;
        text-align: center;
        font-size: 12px;
        transition: all 0.2s ease;
    }

    .tab_item:hover {
        opacity: 0.75;
    }

    input[name="tab_item"] {
        display: none;
    }

    .tab_content {
        display: none;
        padding: 1em 1em 0;
        clear: both;
        overflow: hidden;
    }

    #tab1:checked~#tab1_content,
    #tab2:checked~#tab2_content,
    #tab3:checked~#tab3_content,
    #tab4:checked~#tab4_content,
    #tab5:checked~#tab5_content {
        display: block;
    }

    .tab_container :checked+.tab_item {
        background-color: rgba(0, 191, 255, 0.4);
        color: #fff;
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

<div class="header_nav_tb">

    <div class="header_nav_top">
        <div class="header_logo header_nav_top_ani">U1st</div>
        <div class="header_menu header_nav_top_ani">
            <ul>
                <li>Day|Night</li>
                <li>Lan</li>
            </ul>
        </div>
    </div>

    <div class="tab_container">
        <input id="tab1" type="radio" name="tab_item" checked>
        <label class="tab_item" for="tab1">HOME</label>
        <input id="tab2" type="radio" name="tab_item">
        <label class="tab_item" for="tab2">NEWS</label>
        <input id="tab3" type="radio" name="tab_item">
        <label class="tab_item" for="tab3">PROCESS</label>
        <input id="tab4" type="radio" name="tab_item">
        <label class="tab_item" for="tab4">PORTFOLIO</label>
        <input id="tab5" type="radio" name="tab_item">
        <label class="tab_item" for="tab5">CONTACT</label>

        <div class="tab_content" id="tab1_content">
            <div class="tab_content_description">
                <p class="c-txtsp">HOME</p>
            </div>
        </div>
        <div class="tab_content" id="tab2_content">
            <div class="tab_content_description">
                <p class="c-txtsp">NEWS</p>
            </div>
        </div>
        <div class="tab_content" id="tab3_content">
            <div class="tab_content_description">
                <p class="c-txtsp">PROCESS</p>
            </div>
        </div>
        <div class="tab_content" id="tab4_content">
            <div class="tab_content_description">
                <p class="c-txtsp">PORTFOLIO</p>
            </div>
        </div>
        <div class="tab_content" id="tab5_content">
            <div class="tab_content_description">
                <p class="c-txtsp">CONTACT</p>
            </div>
        </div>
    </div>

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

