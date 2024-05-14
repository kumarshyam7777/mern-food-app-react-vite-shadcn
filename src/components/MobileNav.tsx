import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav: React.FunctionComponent = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flext items-center font-bold gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
              </span>
            ) : (
              <span>Welcome to MernEats.com</span>
            )}
            {/* <span>Welcome to MernEats.com</span> */}
          </SheetTitle>
          <Separator>
            <SheetDescription className="flex flex-col gap-4">
              {isAuthenticated ? (
                <MobileNavLinks />
              ) : (
                <Button
                  onClick={() => loginWithRedirect()}
                  className="flex-1 font-bold bg-orange-500"
                >
                  Log In
                </Button>
              )}
            </SheetDescription>
          </Separator>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
