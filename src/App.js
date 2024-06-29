import "./App.css";
import ModalTest from "./components/custom-tabs/customer-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-top-and-bottom";
import ScrollToSection from "./components/scroll-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Products Component */}
      {/* <LoadMoreData /> */}

      {/* Menu List Component */}
      {/* <TreeView menus={data} /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator /> */}

      {/* light-dark theme mode */}
      {/* <LightDarkMode /> */}

      {/* Scroller Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tab Component */}
      {/* <TabTest /> */}

      {/* Customer Modal Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic-Tac-Toe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custome Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use On Click Outside Hook Test */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll Top To Down Component */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll To A Particular Section */}
      <ScrollToSection />
    </div>
  );
}

export default App;
