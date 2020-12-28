function B2F(doctorObject) {
    console.log(doctorObject);
    let returnedDoctorObject = {};
    for (let i = 0; i < doctorObject.length; i++){
      let SpecializationList = [];
      let LanguageList = [];
      doctorObject[i].specializations.map((specialization) => {
        SpecializationList.push(specialization.specializationName);
      });
      doctorObject[i].languages.map((language) => {
        LanguageList.push(language.languageName);
      });
      returnedDoctorObject[doctorObject[i].id] = {
        FirstName: doctorObject[i].firstName,
        SecondName: doctorObject[i].lastName,
        Age: doctorObject[i].age,
        Gender: doctorObject[i].gender,
        Description: doctorObject[i].description,
        Specialization: SpecializationList,
        Language: LanguageList,
      }
    }
    return returnedDoctorObject;
  }

function SelectDoctors(specialization, language, allDoctors, allDoctorsList){
    let ReturnedDoctorsList = [];
    if (specialization === undefined){
        if (language !== undefined) {
            for (let i = 0; i < allDoctorsList.length; i++) {
            if (
                allDoctors[allDoctorsList[i]].Language.indexOf(language) !== -1
            ) {
                ReturnedDoctorsList.push(allDoctorsList[i]);
            }
            }
        } else {
            ReturnedDoctorsList = Object.keys(allDoctors);
        }
    }
    else{
        if (language !== undefined) {
            for (let i = 0; i < allDoctorsList.length; i++) {
                if (
                  allDoctors[allDoctorsList[i]].Specialization.indexOf(specialization) !== -1 &&
                  allDoctors[allDoctorsList[i]].Language.indexOf(language) !== -1
                ) {
                  ReturnedDoctorsList.push(allDoctorsList[i]);
                }
            }
        }
        else{
            for (let i = 0; i < allDoctorsList.length; i++) {
                if (
                    allDoctors[allDoctorsList[i]].Specialization.indexOf(specialization) !== -1
                ) {
                ReturnedDoctorsList.push(allDoctorsList[i]);
                }
            }
        }
    }
    return ReturnedDoctorsList;
}