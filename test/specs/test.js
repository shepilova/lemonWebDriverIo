describe("Test1", () => {
  const API_URL = "https://sandbox.learnitmore.club/#/";
  const email = "shepilova13@gmail.com";
  const password = "Test12345";

  it("check login with valid credentials", async () => {
    await browser.url(`${API_URL}auth/login`);

    await $(`input#mat-input-0`).waitForDisplayed();

    await $(`input#mat-input-0`).setValue(email);
    await $(`input#mat-input-1`).setValue(password);
    await $(`button[aria-label="LOG IN"]`).click();
    // await browser.pause(5000);

    await expect(browser).toHaveUrl(`${API_URL}school/news`);
    await expect(browser).toHaveUrlContaining("news");
  });

  it("check changing password with invalid data", async () => {
    await browser.url(`${API_URL}user/profile`);

    await $(`input[ng-reflect-name="oldPassword"]`).waitForDisplayed();

    await $(`input[ng-reflect-name="oldPassword"]`).setValue("prevIncorrectPass");
    await $(`input[formcontrolname="newPassword"]`).setValue("newPa");
    await $(`input[formcontrolname="confirmPassword"]`).setValue("newPa");

    await expect(browser).toHaveUrlContaining("user");
    await expect(`button[ng-reflect-fx-flex="50"]`).not.toBeClickable();

    await browser.pause(5000);
  });
});
