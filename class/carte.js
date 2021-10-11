// variables
const fs = require('fs');
const today = new Date();

// JSON
const provinceJson = JSON.parse(
	fs.readFileSync(`${__dirname}/../static/json/province.json`)
);
const csrJson = JSON.parse(
	fs.readFileSync(`${__dirname}/../static/json/csr.json`)
);

// class
class Carte {
	constructor() {
		this.year = today.getFullYear();
	}
	// GET THE CODE OF THE PROVINCE
	getCodeProvince(province) {
		for (let i = 0; i < provinceJson.length; i++) {
			const provinceElement = provinceJson[i];
			if (provinceElement.province === province) {
				return provinceElement.codeProvince;
			}
		}
	}
	// GET THE LIST OF CSR BY PROVINCE
	getCsrListByProvince(province) {
		// variable
		var listCsr = [];
		// loop
		for (let i = 0; i < csrJson.length; i++) {
			const csrElement = csrJson[i];
			if (csrElement.province === province) {
				listCsr.push({
					region: csrElement.region,
					codeRegion: csrElement.codeRegion,
					province: csrElement.province,
					codeProvince: csrElement.codeProvince,
					csr: csrElement.name,
				});
			}
		}
		return listCsr;
	}
	// INIT DATA
	initCsrData(list) {
		var init = {};
		for (let i = 0; i < list.length; i++) {
			const listElement = list[i];
			init[listElement.csr] = {
				codeRegion: listElement.codeRegion,
				codeProvince: listElement.codeProvince,
				value: 0,
			};
		}
		return init;
	}
	// INIT DATA
	pdr(list) {
		var init = {};
		for (let i = 0; i < list.length; i++) {
			const listElement = list[i];
			init[listElement.csr] = {
				t1: 0,
				t2: 0,
				t3: 0,
				t4: 0,
			};
		}
		return init;
	}
	// INIT DATA
	vehicule(list) {
		var init = {};
		for (let i = 0; i < list.length; i++) {
			const listElement = list[i];
			init[listElement.csr] = {
				codeRegion: listElement.codeRegion,
				codeProvince: listElement.codeProvince,
				value: {
					ambulance: {
						appartenance: {
							commune: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ms: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ong: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
						},
					},
					camionMobile: {
						appartenance: {
							commune: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ms: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ong: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
						},
					},
					usm: {
						appartenance: {
							commune: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ms: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ong: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
						},
					},
					vtt: {
						appartenance: {
							commune: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ms: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
							ong: {
								age: {
									moins5ans: 0,
									plus5ans: 0,
								},
							},
						},
					},
				},
			};
		}
		return init;
	}
}

module.exports = {
	Carte,
};
