/*=============sidebar================*/
const section = document.querySelector('.main-content section');
const backdrop = document.createElement("div");
backdrop.setAttribute('class', 'sidebar-backdrop');
section.appendChild(backdrop);


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li",),
    totalNavList = navList.length;
    allSection = document.querySelectorAll("section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        
        const a = navList[i].querySelector("a");
       a.addEventListener("click", function()
       {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
           for(let j=0; j<totalNavList; j++)
            {
                if (navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 768)
            sidebarSectionTogglerBtn();
       })
       
    }

    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")

    }

    /* linking hire-me to contact page
    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
        }
    }
    document.querySelector(".btn hire-me").addEventListener("click", function()
    {
       showSection(this);
       updateNav(this);
    })
    */

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        sidebar = document.querySelector(".sidebar");
        navTogglerBtn.addEventListener("click", () =>
        {
            sidebarSectionTogglerBtn();
        })
        function sidebarSectionTogglerBtn()
        {
            sidebar.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }

        }

