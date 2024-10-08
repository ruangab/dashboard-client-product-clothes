import Layout from '../../components/Layout/Layout';
import FotoCard from '@/components/Cards/FotoCard';

export default function products(){
    // const list_shoes = [
    //     {
    //         'id':1,
    //         'description':'roupa de macho',
    //         'price':'R$ 590,90',
    //         ''
    //         'link':'https://cdnv2.moovin.com.br/turimshop/imagens/produtos/det/bota-masculina-neve-bariloche-cafe-5.webp'
    //     }
    // ];

    function listproducts({list_shoes}){

    }
    return(
        <Layout>
            <div className="grid grid-cols-4 gap-4 pb-4">
                <FotoCard linkimg="https://imgmarketplace.lojasrenner.com.br/20001/1073/700194908/750405570/0.png"/>
                <FotoCard/>
                <FotoCard/>
                <FotoCard/>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-2">
                <FotoCard/>
                <FotoCard/>
                <FotoCard/>
                <FotoCard/>
            </div>

            

        </Layout>
    );
}