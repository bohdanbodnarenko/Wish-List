let run = () => {
  let arrInputs = [
    "deep_link",
    "breadcrumb",
    "link_to_image",
    "thumbnail_page_url"
  ];

  let arrOutputs = [
    "id",
    "product_name",
    "sku",
    "currency",
    "price",
    "FMP",
    "colours",
    "availability",
    "materials",
    "product_number",
    "delivery_cost",
    "delivery_details",
    "price_with_currency",
    "deep_link",
    "link_to_image",
    "thumbnail_page_url",
    "description",
    "description_grouped_1",
    "breadcrumb",
    "sizes",
    "large_image_url",
    "number_of_reviews",
    "number_of_likes",
    "brand",
    "agg_breadcrumb",
    "addi_images",
    "custom_1",
    "custom_2",
    "custom_3"
  ];
  let networkFilters = ["jpg", "png", "ico", "thumbnail_page_url"];

  let arrButtons = Array.from(document.querySelectorAll("div.tab-buttons > a"));
  let inputButton = arrButtons.filter(elem => {
    if (elem.textContent === "Inputs") {
      return elem;
    }
  })[0];
  let outputButton = arrButtons.filter(elem => {
    if (elem.textContent === "Outputs") {
      return elem;
    }
  })[0];
  let networkButton = arrButtons.filter(elem => {
    if (elem.textContent === "Network") {
      return elem;
    }
  })[0];

  let fillInputs = (inputButton, arrInputs) => {
    return new Promise(() => {
      inputButton.click();
      let addFieldButton = document.querySelector(
        "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > a > span"
      );
      for (let i in arrInputs) {
        addFieldButton.click();
        addFieldButton = document.querySelector(".node-new > span");
      }
      let arrRows = document.querySelectorAll(
        "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > span.title > input"
      );
      for (let i in arrRows) {
        arrRows[i].value = arrInputs[i];
        arrRows = document.querySelectorAll(
          "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > span.title > input"
        );
      }
    });
  };
  let fillOutputs = (outputButton, arrOutputs) => {
    return new Promise(() => {
      outputButton.click();
      let addFieldButton = document.querySelector(
        "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > a > span"
      );
      for (let i in arrOutputs) {
        addFieldButton.click();
        addFieldButton = document.querySelector(
          "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > a > span"
        );
      }
      let arrRows = document.querySelectorAll(
        "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > span.title > input"
      );
      for (let i in arrRows) {
        arrRows[i].value = arrOutputs[i];
        arrRows = document.querySelectorAll(
          "div.tab-page.fill.ng-scope.active > robot-fields > div > div.fields > field-editor > div > div.rows > div.row > div.column > span.title > input"
        );
      }
    });
  };
  let fillNetworks = (networkButton, arrNetworks) => {
    networkButton.click();
    let addFieldButton = document.querySelector("th.actions > a");
    for (let i in arrNetworks) {
      addFieldButton.click();
      addFieldButton = document.querySelector("th.actions > a");
    }
    let arrRows = document.querySelectorAll("tbody.ng-scope > tr > td > input");
    for (let i in arrRows) {
      arrRows[i].value = arrOutputs[i];

      arrRows = document.querySelectorAll("tbody.ng-scope > tr > td > input");
    }
  };

  fillInputs(inputButton, arrInputs)
    .then(fillOutputs(outputButton, arrOutputs))
    .then(fillNetworks(networkButton, networkFilters));
};
