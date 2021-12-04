fetch("./data/addons.json")
    .then(function (response) {
        let data = response.json()
        return data
    })

    .then(function (data) {
        var addonListDiv = document.getElementById("addons-lists")
        var addonListElement = document.createElement("ul")

        for (var i = 0; i < data.length; i++) {
            var addonListItem = document.createElement("li")
            addonListItem.innerText = data[i]["addonName"]

            addonListElement.appendChild(addonListItem)
        }
        addonListDiv.appendChild(addonListElement)
    })