const ROOT_FOLDER_PATH =
  "//NAS-BACKUP/Web Dev Simplified/Courses/JavaScript Simplified/Edited Videos/Advanced Section";

it("uploads captions for each video", () => {
  cy.visit("https://app.podia.com/products/javascript-simplified-advanced");
  cy.get("#email").type(Cypress.env("USERNAME"));
  cy.get("#password").type(Cypress.env("PASSWORD"));
  cy.get('form input[type="submit"]').click();

  cy.get(".section.section-panel[data-section-id] .block[data-block-id]").each(
    (block) => {
      const title = block[0].querySelector(
        ".block-info .pr5.mb1.flex.flex-align-center a.no-underline"
      ).textContent;
      cy.get(
        `[data-block-id="${block[0].dataset.blockId}"] .dropdown-menu a:contains(Manage captions)`
      ).click({ force: true });
      cy.wait(1000);
      cy.get("body").then((body) => {
        const element = body.find(
          ".modal.in .modal-body .list-group .list-group-item > span:contains(English):visible"
        );
        console.log(element);
        if (element[0] == null) {
          cy.task("getFiles", {
            folderPath: ROOT_FOLDER_PATH,
            fileType: "srt",
          }).then((captionFiles) => {
            const caption = captionFiles.find((c) => {
              return c.file.replace(".srt", "") === title;
            });
            cy.task("readFile", { root: ROOT_FOLDER_PATH, ...caption }).then(
              (file) => {
                cy.get(".modal.in #captions")
                  .attachFile(
                    {
                      fileName: caption.file,
                      fileContent: file,
                      mimeType: "application/octet-stream",
                      encoding: "utf8",
                    },
                    { subjectType: "input" }
                  )
                  .trigger("input");
                cy.wait(5000);
              }
            );
          });
        }
      });
      cy.get('.modal-body [data-dismiss="modal"]:visible').click();
    }
  );
});
