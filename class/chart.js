// variables
const today = new Date();

// class
class Chart {
	constructor() {
		this.year = today.getFullYear();
	}
	// GET THE CODE OF THE PROVINCE
	getDataByList(data, list) {
		
	}
	// GET THE LIST OF CSR BY PROVINCE
	getCsrListByProvince(province) {
		// variable
		var listCsr = [];
		// loop
		for (let i = 0; i < csrJson.length; i++) {
			const csrElement = csrJson[i];
			if (csrElement.province === province) {
				listCsr.push(csrElement.name);
			}
		}
		return listCsr;
	}
}

module.exports = {
	Carte,
};
