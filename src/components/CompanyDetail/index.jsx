import React from "react"
import style from "./style.module.css"

const CompanyDetail = () => {
    return (
        <>                 
            <div className={style["wrapper"]}>   
                <div className={style["div-left"]}>
                    <p className={style["font-text"]}>PT. Edspert Widya Edu</p>
                    <p className={style["font-desc"]}>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>    
                </div>
                <div className={style["div-right"]}>
                    <img className={style["img-ellipse1"]} src={require('../../assets/images/ellipse1.png')} alt="img-sl" />              
                    <div className={style["wrapper"]}>
                        <div className={style["div1"]}>
                            <p className={style["font-title"]}>Program</p>
                            <p className={style["font-text"]}>Online Course</p>
                            <p className={style["font-text"]}>Mini bootcamp</p>
                            <p className={style["font-text"]}>Bootcamp</p>
                        </div>
                        <div className={style["div2"]}>
                            <p className={style["font-title"]}>Bidang ilmu</p>
                            <p className={style["font-text"]}>Digital marketing</p>
                            <p className={style["font-text"]}>Product management</p>
                            <p className={style["font-text"]}>English</p>
                            <p className={style["font-text"]}>Programming</p>
                        </div>
                        <div className={style["div3"]}>
                            <p className={style["font-title"]}>Tentang edspert</p>
                            <p className={style["font-text"]}>Bantuan</p>
                            <p className={style["font-text"]}>Kontak kami</p>
                            <p className={style["font-text"]}>Media sosial</p>
                        </div>
                    </div>
                    <p className={style["font-copyright"]}>Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.</p>
                </div>
            </div>       
        </>    
    );
}

export default CompanyDetail