BX.ready(function () {
    let data = {}
    BX.bind(
        BX(arParams["BUY_BUTTON_ID"]), "click", function (event) {
            let showingAlert = false
            if (arParams["BASKET_MODE"] === undefined) {
                try {
                    data.properties = fillBasketProps()
                } catch (exception) {
                    if (exception.name === "NO_PROPERTY") {
                        showingAlert = true
                        BX.UI.Dialogs.MessageBox.alert(`<p class=\"box-message\">${exception.message}</p>`);
                    }
                }
                data.quantity = BX(arParams["QUANTITY_ID"]).value
            }
            if (!showingAlert) {
                messageBox.show()
            }
        }
    )

    const messageBox = new BX.UI.Dialogs.MessageBox(
        {
            message: `
            <div class="ui-ctl ui-ctl-textbox ui-ctl-before-icon ui-ctl-after-icon">
                <div class="ui-ctl-before ui-ctl-icon-phone"></div>
                <button class="ui-ctl-after ui-ctl-icon-clear"></button>
                <input type="text" id="${arParams["PHONE_INPUT_ID"]}" class="ui-ctl-element">
            </div>
            `,
            title: BX.message("ONECLICK_BUY_INPUT_NUMBER"),
            modal: true,
            buttons: BX.UI.Dialogs.MessageBoxButtons.OK_CANCEL,
            okCaption: BX.message("ONECLICK_BUY_OK_CAPTION"),
            onOk: function()
            {
                data.phoneNumber = BX(arParams["PHONE_INPUT_ID"]).value
                BX.ajax.runComponentAction("lassie:sale.oneclick_buy",
                    "order", {
                        mode: "class",
                        signedParameters: arParams["SIGNED_PARAMS"],
                        data: data
                    })
                    .then(function (response) {
                        messageBox.setTitle("")
                        messageBox.setMessage(`<h3 class="box-message">
                            ${BX.message("ONECLICK_BUY_THANKS_MESSAGE")}
                            </h3>`)
                        messageBox.setButtons(BX.UI.Dialogs.MessageBoxButtons.CANCEL)
                        messageBox.setCancelCaption(BX.message("ONECLICK_BUY_CANCEL_CAPTION"))
                        console.log(response)
                    })
            },
        }
    );

    function fillBasketProps()
    {
        let properties = {}
        if (!BX(arParams["BASKET_PROP_DIV"]))
            return;

        let propCollection = null,
            basketPropDiv = BX(arParams["BASKET_PROP_DIV"]);

        if (basketPropDiv)
        {
            propCollection = basketPropDiv.getElementsByTagName('select');
            if (propCollection && propCollection.length)
            {
                for (let i = 0; i < propCollection.length; i++)
                {
                    if (!propCollection[i].disabled)
                    {
                        switch (propCollection[i].type.toLowerCase())
                        {
                            case 'select-one':
                                properties[propCollection[i].name] = propCollection[i].value;
                                break;
                            default:
                                break;
                        }
                    }
                }
            }

            propCollection = basketPropDiv.getElementsByTagName('input');
            if (propCollection && propCollection.length)
            {
                for (let i = 0; i < propCollection.length; i++)
                {
                    if (!propCollection[i].disabled)
                    {
                        switch (propCollection[i].type.toLowerCase())
                        {
                            case 'hidden':
                                properties[propCollection[i].name] = propCollection[i].value;
                                break;
                            case 'radio':
                                if (propCollection[i].checked)
                                {
                                    properties[propCollection[i].name] = propCollection[i].value;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            if (Object.keys(properties).length === 0) {
                throw new DOMException(BX.message("ONECLICK_BUY_NO_PROPERTY_MESSAGE"), "NO_PROPERTY")
            }
            return properties
        }
    }
})

