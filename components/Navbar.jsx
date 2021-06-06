import Link from "next/link";
import Image from "next/image";
import { Component } from "react";

class Navbar extends Component {
  state = {
    img: "https://picsum.photos/400/400",
  };
  render() {
    return (
      <nav>
        <div className="logo">
          <Link href="/">
            <a>
              <Image width={128} height={77} src={this.state.img} />
            </a>
          </Link>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>ninjas?</a>
        </Link>
        <Link href="/ninjas/test">
          <a>test</a>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
