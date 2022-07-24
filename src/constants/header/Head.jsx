import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='headWrapper'>
          <div className='leftRow'>
            <div className="phone">
              <LocalPhoneIcon />
              <span> +8000 0000 0000</span>
            </div>
            <div className="mail">
              <MailOutlineIcon />
              <span> support@dee.com</span>
            </div>
          </div>
          <div className='rightRow'>
            <div className="help">Need Help?</div>
            <div className="en">
              <span>EN</span>
            </div>
            <div className="usd">
              <span>USD</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
