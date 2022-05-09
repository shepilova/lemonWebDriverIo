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
  });

  it("check redirecting to another page", async () => {
    await browser.url(`https://webdriver.io/`);

    await $(
      `img[src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"]`
    ).click();

    await expect(browser).toHaveUrl("https://reactjs.org/");
  });
});
