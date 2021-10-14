import { join } from "path";

const ROOT_FOLDER_PATH =
  "//NAS-BACKUP/Web Dev Simplified/Courses/JavaScript Simplified/Edited Videos/Advanced Section";

it("uploads thumbnails and removes .mp4 from name", () => {
  cy.visit("https://app.podia.com/products/javascript-simplified-advanced");
  cy.get("#email").type(Cypress.env("USERNAME"));
  cy.get("#password").type(Cypress.env("PASSWORD"));
  cy.get('form input[type="submit"]').click();
  cy.get(".section-block-list a.btn:contains(Edit)").each((element, index) => {
    cy.wrap(element).click();
    cy.wait(1000);
    cy.get("#block_title")
      .invoke("val")
      .then((text) => {
        cy.get("#block_title")
          .clear()
          .type(
            text.replace(".mp4", "").replace(/^\d\d/, numberToString(index + 1))
          );

        // cy.task("getFiles", ROOT_FOLDER_PATH).then(thumbnailFiles => {
        //   const thumbnail = thumbnailFiles.find(t => {
        //     return t.file.replace(".jpg", "") === text.replace(".mp4", "")
        //   })
        //   cy.task("readFile", { root: ROOT_FOLDER_PATH, ...thumbnail })
        //     .then(Cypress.Blob.arrayBufferToBlob)
        //     .then(file => {
        //       console.log(file)
        cy.get("#custom-thumbnail").click();
        cy.wait(5000);
        //       cy.get(".dropzone").attachFile(
        //         {
        //           fileContent: file,
        //           encoding: "utf-8",
        //         },
        //         { subjectType: "drag-n-drop" }
        //       )
        //       cy.get(
        //         "#block_content_attributes_custom_thumbnail_file"
        //       ).attachFile({
        //         fileContent: file,
        //         encoding: "utf-8",
        //       })
        //     })
        // })
        // cy.wait(5000)
        cy.get('.modal-body .block-form input[type="submit"]').click();
      });
  });
});

function numberToString(n) {
  if (n < 10) return `0${n}`;
  return n.toString();
}
