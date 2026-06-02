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
        <section className="bg-gradient-to-r from-purple-800 to-rose-900 px-6 py-12 text-white md:px-16">
                <h2 className="mb-8 text-center text-3xl font-bold text-amber-500">Achievements & Certificates</h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                 {certificate.map((cert,index)=>(
                    <div key={index} className="flex items-center gap-4 rounded-2xl border border-white/40 bg-white/20 p-4 backdrop-blur-md">
                         <img src={cert.issuedby} width="100" height="100" alt={cert.certname} className="h-20 w-20 rounded-lg object-cover" />
                         <span className="flex-1 text-sm font-medium text-white">{cert.certname}</span>
                         <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-4 py-2 text-sm text-white shadow transition hover:bg-indigo-800">View <FaArrowRight size={12} /></a>
                    </div>
                 ))
                 }
                 </div>

        </section>
        </>
    )
}