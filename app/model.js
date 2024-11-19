var homeContent = `  <div class="banner">
        <h1>MERKAI</h1>

        <h4>Fall 2024</h4>
      </div>

      <h3>FEATURED</h3>

      <div id="allInfo">
        <img
          id="images"
          src="https://png.pngtree.com/thumb_back/fw800/background/20240327/pngtree-beauty-fashion-model-girl-wearing-sunglass-with-trendy-clothes-image_15696050.jpg"
          alt=""
        />
        <div class="title">Fashion & Beauty</div>
      </div>

      <div id="allInfo">
        <div class="title">Food</div>
        <img
          id="images"
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
          alt=""
        />
      </div>`;
var infoContent = ` <h1>MERKAI</h1>

      <div id="allInfos">
        <div class="foodOne"></div>
        <div class="infoText">
          <h3>ChicAura</h3>
          <p>
            is a small boutique that is a family own business. They specialize
            in modern clothing.
          </p>
          <div class="titles">27 Elmwood Ave, Unit 3B</div>
        </div>
      </div>

      <div id="allInfos">
        <div class="infoText">
          <h3>Flavor Haven</h3>
          <div class="titles">
            <p>is a restaurant that specialize in various types of soups</p>
            492 Oakridge Blvd, Apt 5
          </div>
        </div>
        <div class="foodTwo"></div>
      </div>

      <div id="allInfos">
        <div class="foodThree"></div>
        <div class="infoText">
          <h3>Potter’s Palette</h3>
          <p>
            is a family own business that specialize in teaching others how to
            make different types of pottery
          </p>
          <br />
          <div class="titles">14 Pine St, Suite 102</div>
        </div>
      </div> `;
var formContent = `<h2>Form</h2>
      <form
        action="https://formsubmit.co/77130b1b67b2d21fe45d962dfdbbfbf6"
        method="POST"
      >
        <label>Name</label>
        <input
          required
          id="name"
          type="text"
          name="Name"
          placeholder="Business Name"
        />

        <label>Type of business</label>
        <select id="business" name="Business Type" required>
          <option>Food</option>
          <option>Beauty & Fashion</option>
          <option>Other</option>
        </select>

        <label>Explain why you want to be feature</label>

        <textarea
          id="description"
          name="message"
          placeholder="Describe why you want to be feature"
          required
        >
        </textarea>

        <button type="submit">Submit</button>
      </form>`;

export function pageContent(pageID) {
  let contentName = pageID + "Content";
  console.log(pageID);
  $("#app").html(eval(contentName));
}
