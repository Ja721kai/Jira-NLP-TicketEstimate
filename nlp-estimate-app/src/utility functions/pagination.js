import {Fragment, Strong, Text} from "@forge/ui";

const currentReports = [1, 2, 3, 4];

let currentPage = 1;
const PAGESIZE = 3;

const getCurrentPageRange = () => {
  let end = currentPage * PAGESIZE;
  let start = end - (PAGESIZE - 1);
  return start.toString() + "-" + end.toString(); // e.g. 1-20
}

function paginationListener() {
  const navigation = window.querySelector('[aria-label="Pagination"]');
  navigation.addEventListener("click", function(e) {
    console.log(e.target);
    let currentElement = e.target;
    while (currentElement.parentElement.nodeName !== "NAV") {
      currentElement = currentElement.parentElement;
    }
    console.log(currentElement);
    if (currentElement['ariaLabel'] === "Prev") {
      console.log("minus 1");
      currentPage -= 1;
    } else if (currentElement['ariaLabel'] === "Next") {
      console.log("plus 1");
      currentPage += 1;
    } else {
      console.log("Third case.");
      console.log(currentElement['page']);
      currentPage = currentElement['page'];
    }
    setCurrentPageString(getCurrentPageRange())
  });
}
paginationListener();

export const paginationComponent = () => {
  return (
    <Text><Strong>{getCurrentPageRange()}</Strong> von <Strong>{currentReports.length}</Strong></Text>
  );
}

