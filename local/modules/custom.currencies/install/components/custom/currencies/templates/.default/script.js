BX.ready(function () {
    const currencies = arResult["CURRENCIES"]
    const defaultCurrencyIndex = 0
    const defaultInputValue = 0;
    const firstDropdown = BX("first-dropdown")
    const secondDropdown = BX("second-dropdown")
    const firstInput = BX(arResult["FIRST_CUR_INPUT_ID"])
    const secondInput = BX(arResult["SECOND_CUR_INPUT_ID"])
    const submitButton = BX(arResult["SUBMIT_BUTTON_ID"])
    let requestCurrencyID
    let targetCurrencyID
    let activeInput = firstInput
    let firstSelectedCurrency = currencies[defaultCurrencyIndex];
    let secondSelectedCurrency = currencies[defaultCurrencyIndex];

    firstInput.value = defaultInputValue;
    secondInput.value = defaultInputValue;

    BX.append(
        createDefaultNode(
            currencies[defaultCurrencyIndex]["CURRENCY"],
            currencies[defaultCurrencyIndex]["FLAG_URL"]
        ),
        firstDropdown
    )
    BX.append(
        createDefaultNode(
            currencies[defaultCurrencyIndex]["CURRENCY"],
            currencies[defaultCurrencyIndex]["FLAG_URL"]
        ),
        secondDropdown
    )
    firstInput.addEventListener('input', function () {
        activeInput = firstInput
        this.value = validateInput(this.value)
    });
    secondInput.addEventListener('input', function () {
        activeInput = secondInput
        this.value = validateInput(this.value)
    })

    const firstDropdownDialog = dialog(firstDropdown)
    const secondDropdownDialog = dialog(secondDropdown)
    firstDropdown.addEventListener('click', function () {
        firstDropdownDialog.show();
    });
    secondDropdown.addEventListener('click', function () {
        secondDropdownDialog.show();
    })


    submitButton.addEventListener('click', function () {
        const data = getData()
        const resultInput = activeInput === firstInput ? secondInput : firstInput
        if (data !== null) {
            if (data.requestCurrencyID === data.targetCurrencyID) {
                resultInput.value = data.currencyValue
            } else {
                BX.ajax.runComponentAction("custom:currencies",
                    "convert", {
                        mode: "class",
                        data: getData()
                    })
                    .then(function (response) {
                        resultInput.value = response.data.convertedValue
                    })
            }
        } else {
            resultInput.value = 0;
        }

    })


    function dialog(targetNode)
    {
        const dialog = new BX.UI.EntitySelector.Dialog({
            targetNode: targetNode,
            width: 400,
            height: 300,
            multiple: false,
            dropdownMode: true,
            showAvatars: true,
            compactView: true,
            events: {
                "Item:onSelect": event => {
                    const data = event.getData()
                    const selectedID = data.item.id
                    const selectedCurrency = currencies[selectedID - 1]
                    if (targetNode === firstDropdown) {
                        firstSelectedCurrency = selectedCurrency
                    } else if (targetNode === secondDropdown) {
                        secondSelectedCurrency = selectedCurrency
                    }
                    const dropdownNode = targetNode.children[1].children
                    const imageNode = dropdownNode[0]
                    const spanNode = dropdownNode[1]
                    BX.adjust(
                        imageNode, {
                            attrs: {
                                src: selectedCurrency["FLAG_URL"] ?? "",
                                style: selectedCurrency["FLAG_URL"] ? "width: 20" : "display: none"
                            }
                        })
                    BX.adjust(
                        spanNode, {
                            text: " " + selectedCurrency["CURRENCY"]
                        }
                    )
                }
            },
            tabs: [
                {id: "currencies", title: "Currencies", icon: ""}
            ],
        })
        let id = 1;
        currencies.forEach(currency => {
            dialog.addItem(
                {id: id, entityId: "currency", title: currency["CURRENCY"],
                    avatar: currency["FLAG_URL"] ?? "",
                    tabs: "currencies"},
            )
            id++
        })

        return dialog
    }

    function validateInput(value)
    {
        const pattern = new RegExp("^\\d+\\.?\\d*$", "g")
        value = String(value)
        if (!pattern.test(value)) {
            return value.substring(0, value.length - 1)
        }

        if (!value.match(/\d+\.?\d+|\d+\.?/g)) {
            return value.replace(/\.+\D/g, '')
        } else {
            return value
        }
    }

    function getData()
    {
        let data;
        if ((Number(firstInput.value) === 0 && Number(secondInput.value) === 0)
            || Number(activeInput.value) === 0) {
            data = null;
        } else {
            if (activeInput === firstInput) {
                requestCurrencyID = firstSelectedCurrency["ID"]
                targetCurrencyID = secondSelectedCurrency["ID"]
            } else if (activeInput === secondInput) {
                requestCurrencyID = secondSelectedCurrency["ID"]
                targetCurrencyID = firstSelectedCurrency["ID"]
            }
            data = {
                requestCurrencyID: requestCurrencyID,
                targetCurrencyID: targetCurrencyID,
                currencyValue: activeInput.value
            }
        }
        return data
    }

    function createDefaultNode(currencyName, flagUrl)
    {
        return BX.create("div", {
            attrs: {
                className: "ui-ctl-element"
            },
            children: [
                BX.create(
                    "img", {
                        attrs: {
                            src: flagUrl,
                            style: "width: 20",
                        }
                    }
                ),
                BX.create(
                    "span", {
                        text: " " + currencyName
                    }
                )
            ]
        })
    }
})
