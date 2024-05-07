async function menu(divID = "screen") {
    const screen = document.getElementById(divID);
    var menu = screen.appendChild(Object.assign(document.createElement("div"), { id: "menu" }));
    var menuMain = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_main", innerHTML: text.menu.main }));
    var menuDashboard = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_dashboard", innerHTML: text.menu.dashboard }));
    var menuMyCourses = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_my_courses", innerHTML: text.menu.my_courses }));
    var menuAlerts = menu.appendChild(Object.assign(document.createElement("div"), { id: "menu_alert", innerHTML: text.menu.alerts }));
    var menuProfile = menu.appendChild(Object.assign(document.createElement("div"), {
        id: "menu_profile", innerHTML:" anyád,debuggolj!"
            /*
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#292D32" />
                <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#292D32" />
                <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#292D32" />
            </svg>*/

    }));

    var profileDropdown = menuProfile.appendChild(Object.assign(document.createElement("div"), { id: "profile_dropdown", style: "display: none" }));
    var dropdownContent = profileDropdown.appendChild(Object.assign(document.createElement("div"), { id: "dropdown_content" }));
    var dropdownItems = [text.user.profile.title, text.user.calendar, text.user.grades, text.user.language, text.user.logout];
    dropdownItems.forEach(item => {
        var dropdownItem = document.createElement('div');
        dropdownItem.textContent = item;
        dropdownContent.appendChild(dropdownItem);
    });
    menuProfile.addEventListener("click", function () {
        profileDropdown.style.display = (profileDropdown.style.display === "none") ? "block" : "none";
    });
}