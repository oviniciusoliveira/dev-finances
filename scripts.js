const modalSelector = document.querySelector(".modal-overlay");
const Modal = {
  toggleActive() {
    modalSelector.classList.toggle("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "01/01/2021",
  },
  {
    id: 2,
    description: "Criação website",
    amount: -500000,
    date: "01/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "01/01/2021",
  },
  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "01/01/2021",
  },
];

const transaction = {
  incomes() {},
  expenses() {},
  total() {},
};

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },
  innerHTMLTransaction(transaction) {

    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class=${CSSclass}>${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img class="remove-button" src="./assets/minus.svg" alt="remover transação" />
      </td>
    `;
    return html;
  },
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
  }
}

transactions.forEach(transaction => DOM.addTransaction(transaction));