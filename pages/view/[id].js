import { useRouter } from "next/router";

function Post() {
    const router = useRouter();
    const { id } = router.query

    const [item, setItem] = useState({});

    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

    function getData(){
      axios.get(API_URL).then((res) => {
        console.log(res.data);
        setList(res.data);
      });
    }
  
    useEffect(() => {
        if(td && td > 0){
            getData();
        }
    }, []);
    
  
    return (
        <div>
            <Item item={item}/>
        </div>
    )
}

export default Post
