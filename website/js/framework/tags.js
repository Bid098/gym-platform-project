function tCustomizedInputTag(Me) {
    /*var CopyDiv = Me.shadowRoot.getElementById("CopyDiv");
    CopyDiv.setAttribute("data-tooltip", $MWGUI.GetLanguageString("Copy"));
    CopyDiv.addEventListener("click", function () { AttributeClick() })

    CopyDiv.addEventListener("mouseover", function () { AttributeOnmouse() })

    function AttributeClick() {
        CopyDiv.setAttribute("data-tooltip", $MWGUI.GetLanguageString("Copied"));
        navigator.clipboard.writeText(Me.TextCopy);
    }

    function AttributeOnmouse() {
        if (CopyDiv.getAttribute("data-tooltip") == "Copied") {
            CopyDiv.setAttribute("data-tooltip", $MWGUI.GetLanguageString("Copy"))
        }
        else {
            CopyDiv.setAttribute("data-tooltip", $MWGUI.GetLanguageString("Copy"))
        }
    }*/
    let 
}

class CustomizedInputTag extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = atob("PHN0eWxlPgogICAgLm15LWlucHV0LXRhZy1jbGFzcwogICAgewogICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOwogICAgICAgIHdpZHRoOiA1MHZtaW47CiAgICB9CgogICAgLm15LWlucHV0LXRhZy1jbGFzcyBpbnB1dAogICAgewogICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOwogICAgICAgIGRpc3BsYXk6YmxvY2s7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgbGluZS1oZWlnaHQ6MS41OwogICAgICAgIHBhZGRpbmc6IC42NzVyZW0gLjc1cmVtIC4zNzVyZW0gLjc1cmVtOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMTUsIDIwMSwgMC41KTsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzNjM5OwogICAgICAgIGNvbG9yOiAjRENEN0M5OwogICAgICAgIGJvcmRlci1yYWRpdXM6OHB4OwogICAgfQoKICAgIC5teS1pbnB1dC10YWctY2xhc3MgbGFiZWwKICAgIHsKICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTsKICAgICAgICBwb2ludGVyLWV2ZW50czpub25lOwogICAgICAgIGNvbG9yOiNEQ0Q3Qzk7CiAgICAgICAgbGVmdDouNzVyZW07CiAgICAgICAgdG9wOiBjYWxjKDYwJSAtIDFlbSk7CiAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7CiAgICAgICAgb3BhY2l0eToxOwogICAgICAgIGZsb2F0OmxlZnQ7CiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0OwogICAgfQoKICAgIC5teS1pbnB1dC10YWctY2xhc3MgaW5wdXQ6aG92ZXIgfiBsYWJlbCwgCiAgICAubXktaW5wdXQtdGFnLWNsYXNzIGlucHV0OnZhbGlkIH4gbGFiZWwsCiAgICAubXktaW5wdXQtdGFnLWNsYXNzIGlucHV0OnBsYWNlaG9sZGVyLXNob3duIH4gbGFiZWwKICAgIHsKICAgICAgICBmb250LXNpemU6IGNhbGMoMWVtIC8gMS41KTsKICAgICAgICB0b3A6MyU7CiAgICAgICAgb3BhY2l0eTowLjg1OwogICAgfQo8L3N0eWxlPgoKPGRpdiBpZD0iX215LWlucHV0LXRhZy1jbGFzcyIgY2xhc3M9Im15LWlucHV0LXRhZy1jbGFzcyI+CiAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9IiIgcGxhY2Vob2xkZXI9IiIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPSJvZmYiLz4gIAogICAgPGxhYmVsIGlkPSIiIGZvcj0iIj5MYWJlbDwvbGFiZWw+CjwvZGl2Pg==");
        this.script = new tCustomizedInputTag(this);
    }
}

window.customElements.define('pt-input', CustomizedInputTag);