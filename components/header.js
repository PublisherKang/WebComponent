const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color:  #0a0a23;
        }

        ul {
          display: flex;
          padding: 0;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <header>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // shadow Dom 만들기
    // mode : 'open', 'close'
    // close는 외부 javascript에서 엑세스 할 수 없음 open은 가능
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
