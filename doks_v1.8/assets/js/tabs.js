// Override of @thulite/doks-core/assets/js/tabs.js
// If the stored tab name is missing on this page, keep the first tab of that group selected.

var allTabs = document.querySelectorAll('[data-toggle-tab]');

function tabGroups() {
    var groups = [];
    var navs = document.querySelectorAll('.nav-tabs');
    for (var i = 0; i < navs.length; i++) {
        var nav = navs[i].parentElement;
        var content = nav ? nav.nextElementSibling : null;
        groups.push({
            tabs: navs[i].querySelectorAll('[data-toggle-tab]'),
            panes: content ? content.querySelectorAll('[data-pane]') : []
        });
    }
    return groups;
}

function clearGroup(group) {
    for (var i = 0; i < group.tabs.length; i++) {
        group.tabs[i].classList.remove('active');
        group.tabs[i].setAttribute('aria-selected', 'false');
    }
    for (var j = 0; j < group.panes.length; j++) {
        group.panes[j].classList.remove('show', 'active');
    }
}

function selectTab(group, index) {
    group.tabs[index].classList.add('active');
    group.tabs[index].setAttribute('aria-selected', 'true');
    if (group.panes[index]) {
        group.panes[index].classList.add('show', 'active');
    }
}

function toggleTabs(event) {
    var targetKey;
    if (event && event.target) {
        event.preventDefault();
        targetKey = event.currentTarget.getAttribute('data-toggle-tab');
    } else {
        targetKey = event;
    }

    if (window.localStorage && targetKey) {
        window.localStorage.setItem('configLangPref', targetKey);
    }

    var groups = tabGroups();
    for (var g = 0; g < groups.length; g++) {
        var group = groups[g];
        if (!group.tabs.length) {
            continue;
        }
        var matched = -1;
        for (var i = 0; i < group.tabs.length; i++) {
            if (group.tabs[i].getAttribute('data-toggle-tab') === targetKey) {
                matched = i;
                break;
            }
        }
        clearGroup(group);
        selectTab(group, matched === -1 ? 0 : matched);
    }
}

for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener('click', toggleTabs);
}

if (window.localStorage.getItem('configLangPref')) {
    toggleTabs(window.localStorage.getItem('configLangPref'));
}
