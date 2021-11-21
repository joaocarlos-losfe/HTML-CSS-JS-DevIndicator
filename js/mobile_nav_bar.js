class MobileNavBar
{
    constructor(mobileMenu, navList, navLinks)
    {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);

        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass); 
        this.animateLinks();

    }

    animateLinks()
    {
        this.navLinks.forEach((link, index)=>{
            link.style.animation ? (link.style.animation = "") 
                : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    addClickEvent()
    {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init()
    {
        if(this.mobileMenu)
        {
            this.addClickEvent()
        }

        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile_menu",
    ".nav_list",
    ".nav_list li"
);

mobileNavBar.init()