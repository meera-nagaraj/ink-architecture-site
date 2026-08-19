(function(){
  var root = "assets/portfolio/";
  function images(path, count){
    var result = [];
    for(var i=1; i<=count; i++) result.push({src:root+path+"/"+String(i).padStart(2,"0")+".png", caption:""});
    return result;
  }
  function direct(numbers){
    return numbers.map(function(number){ return {src:root+"other-projects/"+String(number).padStart(2,"0")+".png", caption:""}; });
  }
  function privateImages(numbers){
    return numbers.map(function(number){ return {src:root+"private-residences/"+String(number).padStart(2,"0")+".png", caption:""}; });
  }
  function add(slug, title, category, client, location, specs, description, projectImages){
    window.INK_PROJECTS[slug] = {
      title:title, location:location || "", kicker:category,
      cat:category, client:client || "", specs:specs || null,
      desc:description || "", images:projectImages
    };
  }
  window.INK_PROJECTS = {};

  add("master-tata-realty", "TATA Realty Master Plan", "master-planning", "TATA Realty", "Gopalpur, Odisha", [["Client","TATA Realty"],["Area","2,500 acres"],["Scope","Master plan"]], "Master planning for a 2,500-acre development at Gopalpur, Odisha.", images("master-planning/tata-realty", 3));
  add("master-aroma-trivandrum", "Aroma Villas Master Plan", "master-planning", "AROMA", "Trivandrum", [["Client","AROMA"],["Site area","30 acres"],["Units","200 villas"],["Scope","Master plan, villas, clubhouse"]], "Master plan for Aroma Villas, a 200-villa development in Trivandrum.", images("master-planning/aroma-trivandrum", 2));
  add("master-premier-udupi", "Premier Builders Villa Master Plans", "master-planning", "Premier Builders, Udupi", "Bangalore and Manipal", [["Client","Premier Builders, Udupi"],["Site area","5 acres"],["Units","55"]], "Master planning for Premier Builders villa developments in Bangalore and Manipal.", images("master-planning/premier-builders-udupi", 2));

  add("villa-aroma-trivandrum", "Aroma Villas", "villa-development", "AROMA", "Trivandrum", [["Client","AROMA"],["Site area","30 acres"],["Units","200 villas"],["Scope","Master plan, villas, clubhouse"]], "Villa development within the Aroma Villas master plan in Trivandrum.", images("villa-development/aroma-trivandrum", 4));
  add("villa-premier-udupi", "Premier Builders Row Houses", "villa-development", "Premier Builders, Udupi", "Manipal and Bangalore", [["Client","Premier Builders, Udupi"],["Site area","5 acres"],["Units","55"]], "Row-house and villa development for Premier Builders, Udupi.", images("villa-development/premier-builders-udupi", 4));

  add("highrise-aroma", "Aroma Apartments", "highrise-apartment", "AROMA", "Trivandrum", [["Client","AROMA"],["Site area","30 acres"],["Units","200 villas"],["Scope","Master plan, villas, clubhouse"]], "The Aroma residential apartment project shown in the PDF high-rise apartment section.", images("highrise-apartment/aroma", 3));
  add("highrise-skyline-calicut", "Skyline Apartment Tower", "highrise-apartment", "Skyline Builders, Kochi", "Calicut, Kerala", [["Client","Skyline Builders, Kochi"],["Site area","1.0 acre"],["BUA","1,40,000 sft"]], "High-rise apartment project for Skyline Builders in Calicut.", images("highrise-apartment/skyline-builders-calicut", 2));
  add("highrise-skyline-kochi", "Skyline Apartment Towers", "highrise-apartment", "Skyline Builders, Kochi", "Kochi, Kerala", [["Client","Skyline Builders, Kochi"],["Site area","0.5-1.2 acres"],["BUA","40,000-1,70,000 sft"]], "High-rise apartment projects for Skyline Builders in Kochi.", images("highrise-apartment/skyline-builders-kochi", 4));
  add("highrise-skyline-trissur", "Skyline Apartment Tower", "highrise-apartment", "Skyline Builders, Kochi", "Trissur, Kerala", [["Client","Skyline Builders, Kochi"],["Site area","1.1 acres"],["BUA","1,60,000 sft"],["Note","Project from prior employment"]], "High-rise apartment project for Skyline Builders in Trissur.", images("highrise-apartment/skyline-builders-trissur", 1));
  add("highrise-skyline-trivandrum", "Skyline Apartment Tower", "highrise-apartment", "Skyline Builders, Kochi", "Trivandrum, Kerala", [["Client","Skyline Builders, Kochi"],["Site area","1.2 acres"],["BUA","1,70,000 sft"]], "High-rise apartment project for Skyline Builders in Trivandrum.", images("highrise-apartment/skyline-builders-trivandrum", 2));

  add("premium-artech", "Artech Builders Apartments", "premium-apartment", "Artech Builders", "Trivandrum", [["Client","Artech Builders"],["Area","2,50,000 acres"]], "Premium apartment project for Artech Builders in Trivandrum.", images("premium-apartment/artech-builders-trivandrum", 2));
  add("premium-century", "Century Apartments", "premium-apartment", "Century", "Bangalore", [["Client","Century"],["Site area","1.5 acres"],["BUA","2,00,000-2,50,000 sft"]], "Century premium apartment projects in Bangalore, grouped as arranged in the source folder.", images("premium-apartment/century-bangalore", 6));
  add("premium-esteem", "ESTEEM Group Apartments", "premium-apartment", "ESTEEM Group", "Bangalore", [["Client","ESTEEM Group"],["Area","2,00,000 sft"],["Note","Project from prior employment"]], "Premium apartment project for ESTEEM Group in Bangalore.", images("premium-apartment/esteem-group-bangalore", 1));
  add("premium-heather", "Heather Homes Apartments", "premium-apartment", "Heather Homes", "Trivandrum", [["Client","Heather Homes"],["Area","1,25,000 sft"]], "Premium apartment project for Heather Homes in Trivandrum.", images("premium-apartment/heather-homes-trivandrum", 2));
  add("premium-mather", "Mather Premium Apartments", "premium-apartment", "Mather", "Smart City, Kochi", [["Client","Mather"],["Site area","1.5 acres"],["BUA","2,97,000 sft"]], "Premium apartment project for Mather at Smart City, Kochi.", images("premium-apartment/mather-smart-city-kochi", 1));
  add("premium-prime-meridian", "Prime Meridian Apartments", "premium-apartment", "Prime Meridian", "Kochi", [["Client","Prime Meridian"],["Area","2,25,000 sft"]], "Premium apartment project for Prime Meridian in Kochi.", images("premium-apartment/prime-meridian-kochi", 1));

  add("corporate-mariapps", "Mariapps Corporate Office", "corporate-office", "Mariapps", "Smart City, Kochi", [["Client","Mariapps"],["Site area","1.2 acres"],["BUA","2,00,000 sft"]], "Mariapps is a German shipping company with a global presence. INK designed its green-field project in Smart City Kochi from site selection to handover as principal architect.", images("corporate-office/mariapps-smart-city-kochi", 5));
  add("corporate-muthoot", "Muthoot Group Corporate Office", "corporate-office", "Muthoot Group", "Kakkanad, Kochi", [["Client","Muthoot Group"],["Area","2,50,000 acres"],["Note","Project from prior employment"]], "Corporate office project for Muthoot Group at Kakkanad, Kochi.", images("corporate-office/muthoot-group-kochi", 2));
  add("corporate-rmz-hsbc", "RMZ / HSBC Corporate Office", "corporate-office", "RMZ / HSBC", "Bangalore", [["Client","RMZ / HSBC"],["Area","2,50,000 acres"],["Note","Project from prior employment"]], "Corporate office project for RMZ / HSBC in Bangalore.", images("corporate-office/rmz-hsbc-bangalore", 1));
  add("corporate-mphasis", "Mphasis Corporate Office", "corporate-office", "Mphasis, Global Village", "Bangalore", [["Client","Mphasis, Global Village"],["Area","2,50,000 acres"],["Note","Project from prior employment"]], "Corporate office project for Mphasis at Global Village, Bangalore.", images("corporate-office/mphasis-global-village", 1));
  add("corporate-manhattan", "Manhattan Associates Corporate Office", "corporate-office", "Manhattan Associates", "Bangalore", [["Client","Manhattan Associates"],["Area","3,25,000 acres"],["Note","Project from prior employment"]], "Corporate office project for Manhattan Associates in Bangalore.", images("corporate-office/manhattan-associates", 1));
  add("corporate-reliance", "Reliance Corporate Office", "corporate-office", "Reliance", "Hi-Tech City, Hyderabad", [["Client","Reliance"],["Area","2,50,000 sft"],["Note","Project from prior employment"]], "Corporate office project for Reliance at Hi-Tech City, Hyderabad.", images("corporate-office/reliance-hyderabad", 1));

  add("other-mukkadan", "Grand Mall", "other-projects", "Mukkadan Group", "Kinfra, Kochi", [["Client","Mukkadan Group"],["Area","1.0 acres"],["BUA","1,00,000 sft"]], "Leisure and retail project for Mukkadan Group at Kinfra, Kochi.", images("other-projects/mukkadan-group", 2));
  add("other-skyline-commercial", "Skyline Commercial Building", "other-projects", "Skyline Builders", "Kochi", [["Client","Skyline Builders"],["Area","50,000 sft"]], "Commercial building project for Skyline Builders in Kochi.", images("other-projects/skyline-builders-kochi", 1));
  add("other-jb-resort", "JB International Resort", "other-projects", "JB International", "Nandi Hills", [["Client","JB International"],["Area","1.5 acres"]], "Resort project for JB International at Nandi Hills.", images("other-projects/jb-international-nandi-hills", 1));
  add("other-retail", "Retail Development", "other-projects", "", "Patna", [["Area","1,25,000 sft"]], "Retail development in Patna.", direct([1]));
  add("other-mci", "MCI Industrial Warehouse and Office", "other-projects", "MCI", "Bangalore", [["Client","MCI"],["Site area","1.5 acres"],["Area","75,000 sft"],["Note","Project from prior employment"]], "Industrial warehouse and office project for MCI in Bangalore.", direct([2,3]));
  add("other-siri", "SIRI Industrial Park", "other-projects", "SIRI, Dharmasthala", "Belthangadi, Karnataka", [["Client","SIRI, Dharmasthala"],["Site area","10 acres"],["Area","1,00,000 sft"]], "Industrial park project for SIRI at Belthangadi, Karnataka.", direct([4,5,6,7,8,9]));
  add("other-premier-commercial-i", "Premier Builders Commercial I", "other-projects", "Premier Builders", "Mangalore", [["Client","Premier Builders"],["Area","40,000 sft"]], "Commercial project for Premier Builders in Mangalore.", direct([10]));
  add("other-premier-commercial-ii", "Premier Builders Commercial II", "other-projects", "Premier Builders", "Mangalore", [["Client","Premier Builders"],["Area","25,000 sft"]], "Commercial project for Premier Builders in Mangalore.", direct([11]));
  add("other-water-science", "Water Science Warehouse", "other-projects", "Water Science", "Bangalore", [["Client","Water Science"],["Area","40,000 sft"]], "Warehouse project for Water Science in Bangalore.", direct([12]));

  add("interiors-clayworks", "Clayworks Interiors", "interiors", "Clayworks", "Bangalore", [["Client","Clayworks"],["Area","80,000 sft"]], "Interiors project for Clayworks in Bangalore.", images("interiors/clayworks", 10));
  add("interiors-resort", "Resort Interiors", "interiors", "", "", null, "Resort interiors project shown in the source category.", images("interiors/resort", 1));
  add("interiors-dell", "DELL Technologies Data Center", "interiors", "DELL Technologies", "Bangalore", [["Client","DELL Technologies"],["Area","1,00,000 sft"]], "Data center interiors project for DELL Technologies in Bangalore.", images("interiors/dell-technologies-bangalore", 3));
  add("interiors-axes", "Axes Technologies Interiors", "interiors", "Axes Technologies", "Bangalore", [["Client","Axes Technologies"],["Area","1,25,000 sft"],["Note","Project from prior employment"]], "Interiors project for Axes Technologies in Bangalore.", images("interiors/axes-technologies", 3));

  add("private-venkat", "Mr. Venkat Residence", "private-residences", "Mr. Venkat", "Bangalore", [["Client","Mr. Venkat"],["Area","2,500 sft on a 30x40 site"]], "Private residence for Mr. Venkat in Bangalore.", privateImages([1]));
  add("private-shiv-prasad", "Mr. Shiv Prasad Residence", "private-residences", "Mr. Shiv Prasad", "Bangalore", [["Client","Mr. Shiv Prasad"],["Built-up area","10,000 sft"]], "Private residence for Mr. Shiv Prasad in Bangalore.", privateImages([2]));
  add("private-sanjeevani", "Sanjeevani Homes", "private-residences", "Sanjeevani Homes", "Bangalore", [["Client","Sanjeevani Homes"],["Built-up area","5,000 sft"]], "Private residences project in Bangalore.", privateImages([3]));
  add("private-unattributed", "Private Residence", "private-residences", "", "", null, "Private residence image stored directly in the source category.", privateImages([4]));
  add("private-row-house", "Row House", "private-residences", "", "", null, "Row house image stored directly in the source category.", privateImages([5]));
})();
