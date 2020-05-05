const fs = require('fs');


module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        try {
            const contenu = fs.readFileSync(filePath).toString();
            const decoded = Buffer.from(contenu, "hex").toString();
            resolve(decoded);
          } catch (e) {
              console.log("Error:" + e)
              reject();
          }
    });
}
