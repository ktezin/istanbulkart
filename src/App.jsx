import logo from "./assets/istanbulkart-logo.svg";
import app1 from "./assets/istanbulkart-app-1.webp";

function App() {
	return (
		<div className="bg-blue-100">
			<div className="container mx-auto px-6">
				<div className="flex justify-between items-center p-6 bg-blue-100">
					<a href="/">
						<img src={logo} width={200} />
					</a>
					<a href="/#" className="text-lg rounded-xl p-3">
						Hemen Başvur
					</a>
				</div>
				<div className="w-full p-6 rounded-md bg-blue-200 block md:flex md:flex-wrap md:justify-center md:items-center">
					<div className="w-full md:w-1/2">
						<h1 className="p-2 text-4xl md:text-6xl font-bold">
							İstanbul Senin...
						</h1>
						<p className="p-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
							nemo id ab, fugiat officia aliquam non reiciendis suscipit!
							Perspiciatis eos delectus illum, eligendi dolorem accusantium rem
							blanditiis doloribus sit quos possimus quasi ullam odio est.
						</p>
						<button className="m-2 rounded-xl bg-white p-3">
							Hemen Başvur
						</button>
					</div>
					<div className="flex justify-center w-full md:border-l-2 md:w-1/2">
						<img src={app1} width={300}></img>
					</div>
				</div>
				<div className="products"></div>
				<div className="app"></div>
				<div className="footer"></div>
			</div>
		</div>
	);
}

export default App;
