import React from 'react'
import img from "../../assets2/category.jpg"
import { Link } from 'react-router-dom'



const Category = () => {
	return (
		<div>
			<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",height:"550px", margin: "0px 0px 0px 60px", width: "1200px"}}>
				<div>
					<h5 style={{ color: "white", padding: "20px 0px 0px 0px", color:"#FF8E78" }} >Category</h5>

					<div style={{ display: "flex", flexDirection: "row", width: "130px" }}>
						<ul style={{ listStyle: "none" }}>
							<Link to="/collection" ><li>Anarkali</li></Link>
							<Link></Link><li>Saree</li>
							<li>Lehangas</li>
							<li>Co-ords</li>
							<li>Bottoms</li>
							<li>Dresses</li>
							<li>Kurtis</li>
						</ul>
						<ul style={{ listStyle: "none" }} >
						<li>Gowns</li>
							<li>Kaftans</li>
							<li>Sharara Sets </li>
						</ul>
						{/* <ul style={{ listStyle: "none" }} >
							<li>Sarees</li>
							<li>Sharara</li>
							<li>Shirts</li>
							<li>Skirts</li>
							<li>Tops</li>
							<li>Trouser</li>
							<li>Tunics</li>
						</ul> */}
					</div>
				</div>
				<div >
					<h5 style={{ color: "white", padding: "20px 0px 0px 0px", color:"#FF8E78"}} >Trending</h5>
					<div style={{ width: "150px" }} >
						<ul style={{ listStyle: "none" }} >
							<li>Contemporary clothing</li>
							<li>Ethnic</li>
							<li>Resort Wear</li>
							<li>Bridal</li>
							<li>Office Traditional</li>
							<li>office Western</li>
							<li>Haldi</li>
							<li>Mehandi</li>
							<li>Cocktail</li>
						</ul>
					</div>
				</div>
				<div>
					<img src={img} style={{height: "300px", margin:"30% 0px 0px 0px" }} alt="hello" />
				</div>
			</div>
		</div>
	)
}

export default Category