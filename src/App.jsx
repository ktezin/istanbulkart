import logo from "./assets/istanbulkart-logo.svg";
import app1 from "./assets/istanbulkart-app-1.webp";
import app2 from "./assets/istanbulkart-app-2.webp";
import app3 from "./assets/istanbulkart-app-3.webp";
import app4 from "./assets/istanbulkart-app-4.webp";
import app5 from "./assets/istanbulkart-app-5.webp";
import ibb from "./assets/ibb-logo.svg";

function App() {
	return (
		<div className="">
			<div className="container mx-auto px-12">
				<header className="bg-white sticky top-0 flex justify-between items-center p-6">
					<a href="/">
						<img src={logo} width={200} />
					</a>
					<a href="/#" className="text-lg rounded-xl p-3">
						Hemen Başvur
					</a>
				</header>
				<div className="w-full p-6 rounded-md block md:flex md:flex-wrap md:justify-center md:items-center">
					<div className="w-full md:w-1/2">
						<h1 className="p-2 text-4xl md:text-6xl font-bold">
							İstanbul Senin...
						</h1>
						<p className="p-2">
							Artık tüm işlemlerinizi tek uygulamadan kolaylıkla yapabilirsiniz.
						</p>
						<button className="m-2 rounded-xl p-3 bg-gray-800 text-white">
							Hemen Başvur
						</button>
					</div>
					<div className="flex justify-center w-full md:border-l-2 md:w-1/2">
						<img src={app1} width={300}></img>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="w-full p-6 flex flex-wrap justify-center items-center md:flex-row">
						<div className="w-1/2">
							<h4 className="p-2 text-3xl font-bold">QR ile Ödeme</h4>
							<p className="p-2">
								Fiziksel İstanbulkart'a ihtiyaç duymadan tüm toplu ulaşım
								geçişlerini QR kodla yapabilirsin.
							</p>
						</div>
						<div className="flex justify-center w-1/2">
							<img src={app2} width={300}></img>
						</div>
					</div>
					<div className="w-full p-6 flex flex-wrap justify-center items-center">
						<div className="w-1/2">
							<h4 className="p-2 text-3xl font-bold">İşlemler</h4>
							<p className="p-2">
								İstanbulkart'ına TL ve abonman yükleyebilir, bakiyeni
								sorgulayabilir, QR kodla ödeme yapabilirsin.
							</p>
						</div>
						<div className="flex justify-center w-1/2">
							<img src={app3} width={300}></img>
						</div>
					</div>
					<div className="w-full p-6 flex flex-wrap justify-center items-center">
						<div className="w-1/2">
							<h4 className="p-2 text-3xl font-bold">Kartlar</h4>
							<p className="p-2">
								Dilediğin İstanbulkart'ı ekleyebilir, kartlarının adını
								güncelleyebilir ve tüm kartlarına aynı uygulama içinde işlem
								yapabilirsin.
							</p>
						</div>
						<div className="flex justify-center w-1/2">
							<img src={app4} width={300}></img>
						</div>
					</div>
					<div className="w-full p-6 flex flex-wrap justify-center items-center">
						<div className="w-1/2">
							<h4 className="p-2 text-3xl font-bold">NFC Desteği</h4>
							<p className="p-2">
								NFC özelliğini kullanarak İstanbulkart'ının bakiyesini
								öğrenebilir, oluşturduğun talimatı tamamlayabilirsin.
							</p>
						</div>
						<div className="flex justify-center w-1/2">
							<img src={app5} width={300}></img>
						</div>
					</div>
				</div>
				<footer className="flex w-full justify-center gap-12 p-12 border-t-gray border-t">
					<div>
						<p className="font-bold text-xl">Kurumsal</p>
						<ul>
							<li>
								<a href="#">Hakkımızda</a>
							</li>
							<li>
								<a href="#">İletişim</a>
							</li>
							<li>
								<a href="#">Politikalarımız</a>
							</li>
							<li>
								<a href="#">Tarihçe</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="font-bold text-xl">İşlemler</p>
						<ul>
							<li>
								<a href="#">Hemen Başvur</a>
							</li>
							<li>
								<a href="#">Başvuru Noktaları</a>
							</li>
							<li>
								<a href="#">Talimat Yükleme</a>
							</li>
							<li>
								<a href="#">Online İşlemler</a>
							</li>
						</ul>
					</div>
					<div>
						<p className="font-bold text-2xl">444 2 161</p>
						<img src={ibb} width={100}></img>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
