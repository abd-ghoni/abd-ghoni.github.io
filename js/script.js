function about() {
    let dt = document.getElementById("main");

    dt.innerHTML =
        `<h1>
    Tentang Saya 
    </h1>
    <table>
        <tr>
            <td rowspan="4">
                <div class="about profile">
                    <img src="img/Aku.jpg" alt="Abdul Ghoni">
                </div> 
            </td>
            <td rowspan="4">
                <div class="garis_vertikal"></div>
            </td>
            <td>
                Nama
            </td>
            <td>
            :
            </td>
            <td>Abdul Ghoni</td>
        </tr>
        <tr>
            <td>Tgl Lahir</td>
            <td>:</td>
            <td>05 Desember 1994</td>
        </tr>
        <tr>
            <td>Alamat</td>
            <td>:</td>
            <td>Malang, Jawa Timur-Indonesia</td>
        </tr>
        <tr>
            <td>Telp.</td>
            <td>:</td>
            <td>089513809949</td>
        </tr>
    </table>`;
};

function portfolio() {
    let dt = document.getElementById("main");

    dt.innerHTML =
        `<h1>
    Portfolio
    </h1>
    <div class="card">
      <img src="img/animal-g06162609c_1920.jpg">
    </div>  
    <div class="card">
      <img src="img/elephant-g28dfc931e_1920.jpg">
    </div> 
    <div class="card">
      <img src="img/elephant-g5a52530f7_1920.jpg">
    </div>`
};

function blog() {
    let dt = document.getElementById("main");

    dt.innerHTML =
        `<h1>
        Blog
        </h1>
        <div class="cards">
          <div class="card2">
            <img src="img/elephant-gb79b5ddb3_1920.jpg">
          </div> 
          <p class="title">Post  Title</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <hr>
        </div> 
        <div class="cards">
          <div class="card2">
            <img src="img/elephant-ge93bfc408_1920.jpg">
          </div> 
          <p class="title">Post Title</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <hr>
        </div>
        <div class="cards">
          <div class="card2">
            <img src="img/girl-geaa91441c_1920.jpg">
          </div>
          <p class="title">Post Title</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <hr>
        </div>
    </div>`;
}

function team() {
    let dt = document.getElementById("main");

    dt.innerHTML =
        `<h1>
        Team Kami
        </h1>
        <div class="cards">
        <div class="card2">
            <img src="img/team.jpeg">
        </div> 
        <p class="title">Roronoa Zoro</p>
        <p>Bertanggung jawab sebagai web design.</p>
        <hr>
        </div>
        <div class="cards">
        <div class="card2">
            <img src="img/team.jpeg">
        </div>
        <p class="title">Vinsmoke Sanji</p>
        <p>Bertanggung jawab sebagai full stack developer.</p>
        <hr>
        </div>  
        <div class="cards">
        <div class="card2">
            <img src="img/team.jpeg">
        </div>
        <p class="title">M D. Luffy</p>
        <p>Bertanggung jawab sebagai marketing manager.</p>
        <hr>
        </div>`;
};

function contact() {
    let dt = document.getElementById("main");

    dt.innerHTML =

        `<h1>
        Hubungi Kami
        </h1>
        <table>
          <tr>
              <td rowspan="4">
                      <img src="img/call_us.jpg" width="150px" alt="Our Team">
              </td>
              <td rowspan="4">
                  <div class="garis_vertikal"></div>
              </td>
              <td><input type="text" name="nama" value="Your Name"></td>
          </tr>
          <tr>
              <td><input type="email" name="email" value="YourEmail@email.com"></td>
          </tr>
          <tr>
              <td><textarea name="pesan"></textarea></td>
          </tr>
          <tr>
              <td colspan="2"><input type="submit" value="submit"></td>
          </tr>
      </table>`;
};