var homeContent = ` <h1>MERKAI</h1>
      <div class="banner"></div>

      <div id="allInfo">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20240327/pngtree-beauty-fashion-model-girl-wearing-sunglass-with-trendy-clothes-image_15696050.jpg"
          alt=""
        />
        <div class="title">Fashion & Beauty</div>
      </div>

      <div id="allInfo">
        <div class="title">Food</div>
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20240327/pngtree-beauty-fashion-model-girl-wearing-sunglass-with-trendy-clothes-image_15696050.jpg"
          alt=""
        />
      </div>`;
var infoContent = `<h1>MERKAI</h1>

      <h5>Best Feature</h5>
      <div class="foodimg">
        <div class="foodOne"></div>
        <div class="foodTwo"></div>
        <div class="foodThree"></div>
      </div>

      <div class="foodimg">
        <div class="foodOne"></div>
        <div class="foodTwo"></div>
        <div class="foodThree"></div>
      </div>

      <div class="foodimg">
        <div class="foodOne"></div>
        <div class="foodTwo"></div>
        <div class="foodThree"></div>
      </div>`;
var formContent = `<h1>Form</h1>
      <form>
        <label>Name</label>
        <input type="text" />

        <label>Business</label>
        <input type="text" />

        <label>Description</label>
        <input type="text" />

        <button>Submit</button>
      </form>`;

export function pageContent(pageID) {
  let contentName = pageID + "Content";
  console.log(pageID);
  $("#app").html(eval(contentName));
}
