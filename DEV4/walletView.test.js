import WalletView from "./public/walletView.mjs";

describe("WalletView", () => {
  let walletView;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    container.id = "wallet-container";
    document.body.appendChild(container);

    walletView = new WalletView();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test("update method should call renderWallet with data", () => {
    jest.spyOn(walletView, "renderWallet");

    const mockData = {
      name: "Test Wallet",
      publicKey: "12345",
      amount: 100,
      recipientPublicKey: "67890",
    };

    walletView.update("sendFounds", mockData);

    expect(walletView.renderWallet).toHaveBeenCalledWith(mockData);
  });

  test("renderWallet should add wallet data to the DOM", () => {
    const mockData = {
      name: "Test Wallet",
      publicKey: "12345",
      amount: 100,
      recipientPublicKey: "67890",
    };

    walletView.renderWallet(mockData);

    const walletDiv = document.querySelector(".wallet");
    expect(walletDiv).not.toBeNull();
    expect(walletDiv.innerHTML).toContain("Name: Test Wallet");
    expect(walletDiv.innerHTML).toContain("PublicKey: 12345");
    expect(walletDiv.innerHTML).toContain("Amount: 100");
    expect(walletDiv.innerHTML).toContain("Receiver: 67890");
  });

  test("renderWallet should handle undefined walletData", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});

    walletView.renderWallet(undefined);

    expect(console.error).toHaveBeenCalledWith(
      "walletData está indefinido:",
      undefined
    );
  });
});
