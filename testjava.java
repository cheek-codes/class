public class testjava {
    public static void main(String[] args) {

        String koolaid = "koolaid";
        String water = "water";
        String emptyGlass;

        System.out.println("koolaid glass has " + koolaid);
        System.out.println("water glass has " + water);

        emptyGlass = koolaid;
        // koolaid = water;
        // water = emptyGlass;

        System.out.println("koolaid glass now has " + koolaid);
        // System.out.println("water glass now has " + water);
        // System.out.println("empty glass now has " + emptyGlass);
    }
}