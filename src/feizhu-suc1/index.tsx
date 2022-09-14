import React, {useState, useRef, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.less'
/**
 * 营销卡片渲染数据
 */
interface IDirectVoucher {
  /** 品牌名 */
  brandName?: string;
  /** 品牌logo */
  brandLogo?: string;
  /** 距离描述 */
  distanceDesc?: string;
  /** 活动素材图 */
  campImage?: string;
  /** 营销标签 */
  promoLogo?: string | string[];
  /** 券描述 */
  voucherDesc?: string;
  /** 券 */
  benefitAmount?: string;
  /** 特价券原价 */
  oriPriceAmount?: string;
  /** 折扣描述 */
  discountDesc?: string;
  /** 库存 */
  voucherStockNum?: string;
}

const cardDataList: IDirectVoucher[] = [
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*y6CTRo9L2oEAAAAAAAAAAAAAARQnAQ',
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    oriPriceAmount: '28',
    discountDesc: '0.6折',
    voucherStockNum: '库存888份',
  },
  {
    brandName: '弄堂里',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*anNdQqA_I_AAAAAAAAAAAAAAARQnAQ',
    distanceDesc: '500m',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*U29sSqgeU-4AAAAAAAAAAAAAARQnAQ',
    promoLogo: [
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*Q1d4SIoeKRkAAAAAAAAAAAAAARQnAQ',
    ],
    voucherDesc: '弄堂里14元超值优惠券包x2',
    benefitAmount: '1',
    discountDesc: '0.6折',
  },
  {
    brandName: '飞猪',
    brandLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*dCL5Q4oBaQsAAAAAAAAAAAAAARQnAQ',
    campImage:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*MZ7VSaNZXRYAAAAAAAAAAAAAARQnAQ',
    promoLogo:
      'https://gw.alipayobjects.com/mdn/rms_7527d7/afts/img/A*90WEQLmnKdkAAAAAAAAAAAAAARQnAQ',
    voucherDesc: '南方航空20元优惠券',
    benefitAmount: '20',
  },
];

interface ICardProps {
  data: IDirectVoucher;
}

const Card: React.FC<ICardProps> = (props) => {
  const { data } = props;
  const [num, setNUm]=useState(10)
  const [txt, setTxt]=useState('抢购')
  const timer:any=useRef('');
  
  useEffect(()=>{
    startTimer(); // 开启定时器
    return()=>{
      console.log('离开页面------------');
      stopTimer()
    }
  }, [])
  
  const buy=() => {
    setTimeout(()=>{
      setTxt('已抢购')
    }, 1000)
  }

  // 开启定时器
  const startTimer = () => {
    let _num = num;
    timer.current = setInterval(()=>{
      setNUm(_num--)
      if(_num < 0) {
        stopTimer();
      }
    }, 1000)
  }

  // 关闭
  const stopTimer = () =>{
    clearInterval(timer.current);
  }

  return (
    <div className="card flex">
      <div className="card-left">
        <div className='card-left-top flex-between'>
          <div className="card-left-title flex">
            <img src={data.brandLogo} alt="" />
            <div>{data.brandName}</div>
          </div>
          <div className="card-left-juli">
            {data.distanceDesc}
          </div>
        </div>
        <div className='goods flex'>
          <div className='gdimg'>
            <img src={data.campImage} alt="" />
          </div>
          <div className='goodsinfo'>
            <div className='tag'>
              {Array.isArray(data?.promoLogo) ?
                <div>
                  {data?.promoLogo.map((item, i) => (
                    <img src={item} alt="" />
                  ))}
                </div>
                :
                <img src={data?.promoLogo} alt="" />
              }
            </div>
            <div className={`gdname ${!data.oriPriceAmount ? 'gdnamebig' : ''}`}>{data.voucherDesc} </div>
            <div className='gdmondey'>{data.benefitAmount}元</div>
            {data.oriPriceAmount?
              <div className='gdprice delline'>{data.oriPriceAmount}元</div>
              :''
            }
          </div>
        </div>
      </div>

      <div className={`card-right ${(!data.voucherStockNum && !data.discountDesc)?'card-right1':""}`}>
        <div className='center-h'>
          <div className='zhekou'>{data.discountDesc}</div>
        </div>
        <div className='center-h'>
          {num>0?
            <button className='btn'>{num}s</button>
            :
            <button className='btn'
              onClick={buy}
            >{txt}</button>
          }
        </div>
        <div className='center-h'>
          <div className='store'>{data.voucherStockNum}</div>
        </div>
      </div>
    </div>
  );
};

const CardList: React.FC<{ list: IDirectVoucher[] }> = (props) => {
  return (
    <>
      {props.list.map((data) => (
        <Card data={data} />
      ))}
    </>
  );
};

// ReactDOM.render(<CardList list={cardDataList} />, document.getElementById('app'));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CardList list={cardDataList} />
);
