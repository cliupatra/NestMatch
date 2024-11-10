<script>
    function setupTabs() {
        document.querySelectorAll(".tabs__content").forEach(button => {
            button.addEventListener("click", () => {
                const sideBar = button.parentElement;
                const tabContainer = sideBar.parentElement;
                const tabsNumber = button.dataset.forTab;
                const tabToActivate = tabsContainer.querySelector('.tabs__content[data-tab="${tabsNumber}"]');

                console.log(sideBar);
                console.log(tabContainer);
                console.log(tabsNumber);
                console.log(tabToActivate);
            })
        })
    }

    {/* document.addEventListener("DOMContentLoaded", ()=> {
    setupTabs();
    }) */}
    
</script>