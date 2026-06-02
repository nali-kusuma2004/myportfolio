import { FaArrowRight } from "react-icons/fa";

export default function Certificates(){
    const certificate=[
        {
        
            certname:"Developing Backend apps using node js and Express  ",
            issuedby:"https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
            link:"https://drive.google.com/file/d/1FdTThnBZxRJ3hXQTUhMic2I052cY0Ccx/view?usp=drivesdk",
        },
         {
            certname:"JavaScript -unlocking the power of javascript   ",
            issuedby:"https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/04/22114231/Scaler-HT-860x484.png",
            link:" https://drive.google.com/file/d/1NZmz1_3YnKC2SE5AuomFQsAQN-KSwF9c/view?usp=drive_link"
    
        },
         {
            certname:"full stack developer Intern(MERN)  ",
            issuedby:"https://smartinternz.com/images/company_logos/thumbs/1581348858SmartBridge_Logo_W_BG.png ",
            link:" https://drive.google.com/file/d/1D1viKXmXHok6zOkmN2vn2MSrys9f14fj/view?usp=drive_link"
        },
        {
            certname:"Introduction to MERN stack ",
            issuedby:"https://play-lh.googleusercontent.com/uphrWz_e_K_pZrPOmCR34A6grxPtva0kM8bhMSgdycrlxiBC7C_JzGtyJLn1mfrRLrg ",
            link:"https://drive.google.com/file/d/1OdqNoUfF_GIlayusnXS9K0pFezVPEplQ/view?usp=drivesdk"
        },

        {
            certname:"Deep learning  ",
            issuedby:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VRmuwZhG40QDxM_IF9klXkzNA96GmX1z2Q&s",
            link:"https://drive.google.com/file/d/1Z-44_ULzwqmLK0RG5XfQNG4w_X7HXoDj/view?usp=drivesdk"
        },
        {
            certname:"cloud computing ",
            issuedby:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8VRmuwZhG40QDxM_IF9klXkzNA96GmX1z2Q&s",
            link:"https://drive.google.com/file/d/1yyGHISbDjuitA65DKgJO2ySlh-44en15/view?usp=drivesdk"
        }

    ];
    return (
        <>
        <div className="bg-gradient-to-r from-[#7b0499] to-[rgb(75,10,48)]">
                <h2 className="mx-auto px-5 py-6 text-center text-3xl text-[goldenrod] md:px-20">Achievements & certificates </h2>
            <div className="mx-4 flex flex-wrap py-2 md:mx-[60px]">
                 {certificate.map((cert,index)=>(
                    <div key={index} className="my-3 flex w-full rounded-[15px] border border-white bg-[rgba(255,255,255,0.3)] p-3 text-white shadow-[3px_3px_2px_whitesmoke] backdrop-blur-[40px] md:mx-[42px] md:my-[23px] md:w-[35em] md:px-7">
                         <img src={cert.issuedby} width="100" height="100" alt={cert.certname} className="rounded-[10px]" />
                         <span className="mx-2 my-2 flex items-center py-2 text-black md:py-[30px]">{cert.certname}</span>
                         <a href={cert.link} target="_blank" rel="noreferrer" className="ml-auto mt-6 rounded-[20px] bg-[#240950] px-3 py-2 text-[16px] text-white md:mt-[60px] md:text-[18px]">view</a>
                    </div>
                 ))
                 }
                 </div>

        </div>
        </>
    )
}